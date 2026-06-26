-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Create Tables

create table public.users (
  id uuid primary key default uuid_generate_v4(),
  discord_id text unique not null,
  username text not null,
  avatar text,
  email text,
  role text default 'user',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.servers (
  id uuid primary key default uuid_generate_v4(),
  guild_id text unique not null,
  guild_name text not null,
  guild_icon text,
  owner_id uuid references public.users(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.security_settings (
  id uuid primary key default uuid_generate_v4(),
  server_id uuid references public.servers(id) on delete cascade not null unique,
  anti_nuke boolean default false,
  anti_raid boolean default false,
  anti_spam boolean default false,
  anti_bot boolean default false,
  anti_link boolean default false,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.audit_logs (
  id uuid primary key default uuid_generate_v4(),
  server_id uuid references public.servers(id) on delete cascade not null,
  action text not null,
  moderator uuid references public.users(id) on delete set null,
  target text,
  reason text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade not null,
  title text not null,
  description text,
  read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.dashboard_stats (
  id uuid primary key default uuid_generate_v4(),
  total_servers integer default 0,
  protected_servers integer default 0,
  threats_blocked integer default 0,
  active_users integer default 0,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.announcements (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  content text not null,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table public.premium_plans (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  price numeric not null,
  features jsonb,
  active boolean default true
);

create table public.user_subscriptions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade not null,
  plan_id uuid references public.premium_plans(id) on delete restrict not null,
  status text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);


-- 2. Enable Row Level Security

alter table public.users enable row level security;
alter table public.servers enable row level security;
alter table public.security_settings enable row level security;
alter table public.audit_logs enable row level security;
alter table public.notifications enable row level security;
alter table public.dashboard_stats enable row level security;
alter table public.announcements enable row level security;
alter table public.premium_plans enable row level security;
alter table public.user_subscriptions enable row level security;


-- 3. Define RLS Policies

-- Users: Users can read their own data, Admins can read all.
create policy "Users can view their own data" on public.users
  for select using (auth.uid() = id);

-- Servers: Owners can read/manage their own servers.
create policy "Owners can view their servers" on public.servers
  for select using (auth.uid() = owner_id);

-- Security Settings: Server owners can read/manage security settings.
create policy "Owners can view security settings" on public.security_settings
  for select using (
    exists (
      select 1 from public.servers
      where servers.id = security_settings.server_id
      and servers.owner_id = auth.uid()
    )
  );

-- Audit Logs: Server owners can view audit logs for their servers.
create policy "Owners can view audit logs" on public.audit_logs
  for select using (
    exists (
      select 1 from public.servers
      where servers.id = audit_logs.server_id
      and servers.owner_id = auth.uid()
    )
  );

-- Notifications: Users can view their own notifications.
create policy "Users can view their notifications" on public.notifications
  for select using (auth.uid() = user_id);

-- Global Public Readable Data (Stats, Announcements, Premium Plans)
create policy "Anyone can view dashboard stats" on public.dashboard_stats for select using (true);
create policy "Anyone can view published announcements" on public.announcements for select using (published = true);
create policy "Anyone can view active premium plans" on public.premium_plans for select using (active = true);

-- User Subscriptions: Users can view their own subscriptions
create policy "Users can view their subscriptions" on public.user_subscriptions
  for select using (auth.uid() = user_id);

-- 4. Set up Realtime (Optional, for notifications/stats/audit_logs)
alter publication supabase_realtime add table public.notifications;
alter publication supabase_realtime add table public.dashboard_stats;
alter publication supabase_realtime add table public.audit_logs;
