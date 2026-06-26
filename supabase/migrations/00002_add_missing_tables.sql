-- 1. Helper function for Admin checks
create or replace function public.is_admin()
returns boolean as $$
begin
  return exists (
    select 1 from public.users
    where id = auth.uid() and role = 'admin'
  );
end;
$$ language plpgsql security definer;

-- Alter users table to add banned column
alter table public.users add column if not exists banned boolean default false;

-- 2. Create Missing Tables

-- guild_settings
create table if not exists public.guild_settings (
  id uuid primary key default uuid_generate_v4(),
  server_id uuid references public.servers(id) on delete cascade not null unique,
  prefix text default '!' not null,
  welcome_channel text,
  welcome_message text,
  goodbye_channel text,
  goodbye_message text,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- moderation_logs
create table if not exists public.moderation_logs (
  id uuid primary key default uuid_generate_v4(),
  server_id uuid references public.servers(id) on delete cascade not null,
  action text not null, -- 'ban', 'kick', 'mute', 'warn', 'unban', etc.
  user_id uuid references public.users(id) on delete set null,
  moderator_id uuid references public.users(id) on delete set null,
  reason text,
  duration text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- changelogs
create table if not exists public.changelogs (
  id uuid primary key default uuid_generate_v4(),
  version text not null unique,
  title text not null,
  content text not null,
  published boolean default false not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- support_tickets
create table if not exists public.support_tickets (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade not null,
  server_id uuid references public.servers(id) on delete cascade,
  title text not null,
  category text not null,
  status text default 'open' not null, -- 'open', 'assigned', 'closed'
  assigned_to uuid references public.users(id) on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ticket_messages
create table if not exists public.ticket_messages (
  id uuid primary key default uuid_generate_v4(),
  ticket_id uuid references public.support_tickets(id) on delete cascade not null,
  sender_id uuid references public.users(id) on delete cascade not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- activity_logs
create table if not exists public.activity_logs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade not null,
  server_id uuid references public.servers(id) on delete cascade,
  action text not null,
  details jsonb default '{}'::jsonb not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- system_settings
create table if not exists public.system_settings (
  id uuid primary key default uuid_generate_v4(),
  key text unique not null,
  value jsonb default '{}'::jsonb not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Enable RLS on New Tables
alter table public.guild_settings enable row level security;
alter table public.moderation_logs enable row level security;
alter table public.changelogs enable row level security;
alter table public.support_tickets enable row level security;
alter table public.ticket_messages enable row level security;
alter table public.activity_logs enable row level security;
alter table public.system_settings enable row level security;

-- 4. Set up Realtime for tickets and activities
alter publication supabase_realtime add table public.support_tickets;
alter publication supabase_realtime add table public.ticket_messages;
alter publication supabase_realtime add table public.moderation_logs;
alter publication supabase_realtime add table public.activity_logs;

-- 5. Additional / Write Policies for All Tables

-- users: allow inserts/updates by user themselves or admin
create policy "Users can insert their own profile" on public.users
  for insert with check (auth.uid() = id);
create policy "Users can update their own profile" on public.users
  for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "Admins can manage all users" on public.users
  for all using (public.is_admin());

-- servers: allow insert/update/delete by owners or admins
create policy "Owners can insert their servers" on public.servers
  for insert with check (auth.uid() = owner_id);
create policy "Owners can update their servers" on public.servers
  for update using (auth.uid() = owner_id) with check (auth.uid() = owner_id);
create policy "Owners can delete their servers" on public.servers
  for delete using (auth.uid() = owner_id);
create policy "Admins can manage all servers" on public.servers
  for all using (public.is_admin());

-- guild_settings: select/insert/update for owners or admins
create policy "Owners can view guild settings" on public.guild_settings
  for select using (
    exists (
      select 1 from public.servers
      where servers.id = guild_settings.server_id
      and servers.owner_id = auth.uid()
    )
  );
create policy "Owners can insert guild settings" on public.guild_settings
  for insert with check (
    exists (
      select 1 from public.servers
      where servers.id = guild_settings.server_id
      and servers.owner_id = auth.uid()
    )
  );
create policy "Owners can update guild settings" on public.guild_settings
  for update using (
    exists (
      select 1 from public.servers
      where servers.id = guild_settings.server_id
      and servers.owner_id = auth.uid()
    )
  );
create policy "Admins can manage all guild settings" on public.guild_settings
  for all using (public.is_admin());

-- security_settings: allow insert/update for owners
create policy "Owners can insert security settings" on public.security_settings
  for insert with check (
    exists (
      select 1 from public.servers
      where servers.id = security_settings.server_id
      and servers.owner_id = auth.uid()
    )
  );
create policy "Owners can update security settings" on public.security_settings
  for update using (
    exists (
      select 1 from public.servers
      where servers.id = security_settings.server_id
      and servers.owner_id = auth.uid()
    )
  );
create policy "Admins can manage all security settings" on public.security_settings
  for all using (public.is_admin());

-- audit_logs: allow insert by owners or admins
create policy "Owners can insert audit logs" on public.audit_logs
  for insert with check (
    exists (
      select 1 from public.servers
      where servers.id = audit_logs.server_id
      and servers.owner_id = auth.uid()
    )
  );
create policy "Admins can manage all audit logs" on public.audit_logs
  for all using (public.is_admin());

-- moderation_logs: allow select/insert for owners or admins
create policy "Owners can view moderation logs" on public.moderation_logs
  for select using (
    exists (
      select 1 from public.servers
      where servers.id = moderation_logs.server_id
      and servers.owner_id = auth.uid()
    )
  );
create policy "Owners can insert moderation logs" on public.moderation_logs
  for insert with check (
    exists (
      select 1 from public.servers
      where servers.id = moderation_logs.server_id
      and servers.owner_id = auth.uid()
    )
  );
create policy "Admins can manage all moderation logs" on public.moderation_logs
  for all using (public.is_admin());

-- notifications: allow inserts (for system/admins) and updates/deletes for user
create policy "Users can update their notifications" on public.notifications
  for update using (auth.uid() = user_id);
create policy "Users can delete their notifications" on public.notifications
  for delete using (auth.uid() = user_id);
create policy "Admins can manage all notifications" on public.notifications
  for all using (public.is_admin());

-- dashboard_stats: allow admins to manage
create policy "Admins can manage dashboard stats" on public.dashboard_stats
  for all using (public.is_admin());

-- announcements: allow admins to manage
create policy "Admins can manage announcements" on public.announcements
  for all using (public.is_admin());

-- changelogs: viewable by anyone if published, full access for admins
create policy "Anyone can view published changelogs" on public.changelogs
  for select using (published = true);
create policy "Admins can manage changelogs" on public.changelogs
  for all using (public.is_admin());

-- support_tickets: users can view/insert/update their own, admins can manage all
create policy "Users can view their tickets" on public.support_tickets
  for select using (auth.uid() = user_id);
create policy "Users can insert their tickets" on public.support_tickets
  for insert with check (auth.uid() = user_id);
create policy "Users can update their tickets" on public.support_tickets
  for update using (auth.uid() = user_id);
create policy "Admins can manage all tickets" on public.support_tickets
  for all using (public.is_admin());

-- ticket_messages: users can view/insert messages for their tickets, admins can manage all
create policy "Users can view their ticket messages" on public.ticket_messages
  for select using (
    exists (
      select 1 from public.support_tickets
      where support_tickets.id = ticket_messages.ticket_id
      and support_tickets.user_id = auth.uid()
    )
  );
create policy "Users can insert their ticket messages" on public.ticket_messages
  for insert with check (
    exists (
      select 1 from public.support_tickets
      where support_tickets.id = ticket_messages.ticket_id
      and support_tickets.user_id = auth.uid()
    )
  );
create policy "Admins can manage all ticket messages" on public.ticket_messages
  for all using (public.is_admin());

-- activity_logs: users can view their own, admins can manage all
create policy "Users can view their activity logs" on public.activity_logs
  for select using (auth.uid() = user_id);
create policy "Users can insert their activity logs" on public.activity_logs
  for insert with check (auth.uid() = user_id);
create policy "Admins can manage all activity logs" on public.activity_logs
  for all using (public.is_admin());

-- system_settings: public read for keys, write for admins
create policy "Anyone can view system settings" on public.system_settings
  for select using (true);
create policy "Admins can manage system settings" on public.system_settings
  for all using (public.is_admin());
