-- Migration 3: Complete Titanium Security Schema
-- Creates all remaining tables, RLS policies, realtime, and indexes

-- ============================================================
-- 1. NEW TABLES
-- ============================================================

-- status_services: Status page service health
create table if not exists public.status_services (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  status text not null default 'operational', -- 'operational', 'degraded', 'partial_outage', 'major_outage'
  uptime numeric default 100,
  response_time integer default 0, -- ms
  last_checked_at timestamp with time zone default timezone('utc'::text, now()) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- team_members: Team page members
create table if not exists public.team_members (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  role text not null,
  avatar text,
  bio text,
  discord_id text,
  github text,
  twitter text,
  sort_order integer default 0,
  active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- faq: FAQ entries
create table if not exists public.faq (
  id uuid primary key default uuid_generate_v4(),
  question text not null,
  answer text not null,
  category text default 'general',
  sort_order integer default 0,
  published boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- feature_requests: User feature requests
create table if not exists public.feature_requests (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade not null,
  title text not null,
  description text not null,
  status text default 'pending', -- 'pending', 'planned', 'in_progress', 'completed', 'rejected'
  upvotes integer default 0,
  category text default 'general',
  admin_response text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- feedback: User feedback/bug reports
create table if not exists public.feedback (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade not null,
  type text not null default 'feedback', -- 'feedback', 'bug_report', 'suggestion'
  title text not null,
  description text not null,
  status text default 'new', -- 'new', 'reviewed', 'resolved', 'closed'
  priority text default 'normal', -- 'low', 'normal', 'high', 'critical'
  admin_response text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- bot_statistics: Bot shard/latency data
create table if not exists public.bot_statistics (
  id uuid primary key default uuid_generate_v4(),
  shard_id integer not null default 0,
  guild_count integer default 0,
  user_count integer default 0,
  latency integer default 0, -- ms
  status text default 'online', -- 'online', 'idle', 'dnd', 'offline'
  uptime_seconds bigint default 0,
  memory_usage numeric default 0, -- MB
  cpu_usage numeric default 0, -- percent
  commands_processed bigint default 0,
  recorded_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- command_usage: Command analytics
create table if not exists public.command_usage (
  id uuid primary key default uuid_generate_v4(),
  server_id uuid references public.servers(id) on delete cascade,
  command_name text not null,
  user_id uuid references public.users(id) on delete set null,
  guild_id text,
  channel_id text,
  success boolean default true,
  execution_time integer default 0, -- ms
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- server_statistics: Per-server stats over time
create table if not exists public.server_statistics (
  id uuid primary key default uuid_generate_v4(),
  server_id uuid references public.servers(id) on delete cascade not null,
  member_count integer default 0,
  online_count integer default 0,
  message_count integer default 0,
  command_count integer default 0,
  threats_blocked integer default 0,
  moderation_actions integer default 0,
  joins integer default 0,
  leaves integer default 0,
  recorded_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- security_events: Security incident tracking
create table if not exists public.security_events (
  id uuid primary key default uuid_generate_v4(),
  server_id uuid references public.servers(id) on delete cascade not null,
  event_type text not null, -- 'raid', 'nuke', 'spam', 'phishing', 'mass_ban', 'role_escalation', etc.
  severity text not null default 'medium', -- 'low', 'medium', 'high', 'critical'
  description text not null,
  source_user text,
  action_taken text,
  resolved boolean default false,
  resolved_at timestamp with time zone,
  resolved_by uuid references public.users(id) on delete set null,
  metadata jsonb default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- login_history: User login audit trail
create table if not exists public.login_history (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade not null,
  action text not null default 'login', -- 'login', 'logout', 'token_refresh'
  ip_address text,
  user_agent text,
  provider text default 'discord',
  success boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- api_keys: User API key management
create table if not exists public.api_keys (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade not null,
  name text not null,
  key_hash text not null,
  key_prefix text not null, -- first 8 chars for display
  scopes jsonb default '["read"]'::jsonb,
  last_used_at timestamp with time zone,
  expires_at timestamp with time zone,
  active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- webhooks: Webhook configurations
create table if not exists public.webhooks (
  id uuid primary key default uuid_generate_v4(),
  server_id uuid references public.servers(id) on delete cascade not null,
  name text not null,
  url text not null,
  events jsonb default '[]'::jsonb, -- events to trigger on
  secret text,
  active boolean default true,
  last_triggered_at timestamp with time zone,
  failure_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- integrations: Third-party integrations
create table if not exists public.integrations (
  id uuid primary key default uuid_generate_v4(),
  server_id uuid references public.servers(id) on delete cascade not null,
  type text not null, -- 'slack', 'github', 'pagerduty', 'notion', etc.
  name text not null,
  config jsonb default '{}'::jsonb,
  active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- billing: Billing records
create table if not exists public.billing (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade not null,
  amount numeric not null,
  currency text default 'usd',
  status text default 'pending', -- 'pending', 'paid', 'failed', 'refunded'
  description text,
  invoice_url text,
  payment_method text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- usage: Resource usage tracking
create table if not exists public.usage (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id) on delete cascade,
  server_id uuid references public.servers(id) on delete cascade,
  resource_type text not null, -- 'api_calls', 'storage', 'commands', 'audit_logs'
  amount numeric not null default 0,
  period_start timestamp with time zone not null,
  period_end timestamp with time zone not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add member_count and premium columns to servers
alter table public.servers add column if not exists member_count integer default 0;
alter table public.servers add column if not exists premium boolean default false;
alter table public.servers add column if not exists premium_since timestamp with time zone;
alter table public.servers add column if not exists verification_level integer default 0;
alter table public.servers add column if not exists bot_connected boolean default false;
alter table public.servers add column if not exists bot_latency integer default 0;

-- Add global_name and banner to users
alter table public.users add column if not exists global_name text;
alter table public.users add column if not exists banner text;

-- ============================================================
-- 2. ENABLE ROW LEVEL SECURITY
-- ============================================================

alter table public.status_services enable row level security;
alter table public.team_members enable row level security;
alter table public.faq enable row level security;
alter table public.feature_requests enable row level security;
alter table public.feedback enable row level security;
alter table public.bot_statistics enable row level security;
alter table public.command_usage enable row level security;
alter table public.server_statistics enable row level security;
alter table public.security_events enable row level security;
alter table public.login_history enable row level security;
alter table public.api_keys enable row level security;
alter table public.webhooks enable row level security;
alter table public.integrations enable row level security;
alter table public.billing enable row level security;
alter table public.usage enable row level security;

-- ============================================================
-- 3. RLS POLICIES
-- ============================================================

-- status_services: Public read, admin write
create policy "Anyone can view status services" on public.status_services for select using (true);
create policy "Admins can manage status services" on public.status_services for all using (public.is_admin());

-- team_members: Public read active, admin write
create policy "Anyone can view active team members" on public.team_members for select using (active = true);
create policy "Admins can manage team members" on public.team_members for all using (public.is_admin());

-- faq: Public read published, admin write
create policy "Anyone can view published FAQ" on public.faq for select using (published = true);
create policy "Admins can manage FAQ" on public.faq for all using (public.is_admin());

-- feature_requests: Users can view all, create own, admins manage all
create policy "Anyone can view feature requests" on public.feature_requests for select using (true);
create policy "Users can create feature requests" on public.feature_requests for insert with check (auth.uid() = user_id);
create policy "Users can update their feature requests" on public.feature_requests for update using (auth.uid() = user_id);
create policy "Admins can manage all feature requests" on public.feature_requests for all using (public.is_admin());

-- feedback: Users can view/create own, admins manage all
create policy "Users can view their feedback" on public.feedback for select using (auth.uid() = user_id);
create policy "Users can create feedback" on public.feedback for insert with check (auth.uid() = user_id);
create policy "Admins can manage all feedback" on public.feedback for all using (public.is_admin());

-- bot_statistics: Public read, admin write
create policy "Anyone can view bot statistics" on public.bot_statistics for select using (true);
create policy "Admins can manage bot statistics" on public.bot_statistics for all using (public.is_admin());

-- command_usage: Server owners can view their server's usage, admins see all
create policy "Owners can view command usage" on public.command_usage for select using (
  server_id is null or exists (
    select 1 from public.servers where servers.id = command_usage.server_id and servers.owner_id = auth.uid()
  )
);
create policy "Admins can manage command usage" on public.command_usage for all using (public.is_admin());

-- server_statistics: Server owners can view their server's stats
create policy "Owners can view server statistics" on public.server_statistics for select using (
  exists (
    select 1 from public.servers where servers.id = server_statistics.server_id and servers.owner_id = auth.uid()
  )
);
create policy "Admins can manage server statistics" on public.server_statistics for all using (public.is_admin());

-- security_events: Server owners can view/manage their events
create policy "Owners can view security events" on public.security_events for select using (
  exists (
    select 1 from public.servers where servers.id = security_events.server_id and servers.owner_id = auth.uid()
  )
);
create policy "Owners can insert security events" on public.security_events for insert with check (
  exists (
    select 1 from public.servers where servers.id = security_events.server_id and servers.owner_id = auth.uid()
  )
);
create policy "Owners can update security events" on public.security_events for update using (
  exists (
    select 1 from public.servers where servers.id = security_events.server_id and servers.owner_id = auth.uid()
  )
);
create policy "Admins can manage all security events" on public.security_events for all using (public.is_admin());

-- login_history: Users can view their own login history
create policy "Users can view their login history" on public.login_history for select using (auth.uid() = user_id);
create policy "Users can insert their login history" on public.login_history for insert with check (auth.uid() = user_id);
create policy "Admins can manage all login history" on public.login_history for all using (public.is_admin());

-- api_keys: Users can manage their own keys
create policy "Users can view their API keys" on public.api_keys for select using (auth.uid() = user_id);
create policy "Users can create API keys" on public.api_keys for insert with check (auth.uid() = user_id);
create policy "Users can update their API keys" on public.api_keys for update using (auth.uid() = user_id);
create policy "Users can delete their API keys" on public.api_keys for delete using (auth.uid() = user_id);
create policy "Admins can manage all API keys" on public.api_keys for all using (public.is_admin());

-- webhooks: Server owners can manage their webhooks
create policy "Owners can view webhooks" on public.webhooks for select using (
  exists (select 1 from public.servers where servers.id = webhooks.server_id and servers.owner_id = auth.uid())
);
create policy "Owners can create webhooks" on public.webhooks for insert with check (
  exists (select 1 from public.servers where servers.id = webhooks.server_id and servers.owner_id = auth.uid())
);
create policy "Owners can update webhooks" on public.webhooks for update using (
  exists (select 1 from public.servers where servers.id = webhooks.server_id and servers.owner_id = auth.uid())
);
create policy "Owners can delete webhooks" on public.webhooks for delete using (
  exists (select 1 from public.servers where servers.id = webhooks.server_id and servers.owner_id = auth.uid())
);
create policy "Admins can manage all webhooks" on public.webhooks for all using (public.is_admin());

-- integrations: Server owners can manage their integrations
create policy "Owners can view integrations" on public.integrations for select using (
  exists (select 1 from public.servers where servers.id = integrations.server_id and servers.owner_id = auth.uid())
);
create policy "Owners can create integrations" on public.integrations for insert with check (
  exists (select 1 from public.servers where servers.id = integrations.server_id and servers.owner_id = auth.uid())
);
create policy "Owners can update integrations" on public.integrations for update using (
  exists (select 1 from public.servers where servers.id = integrations.server_id and servers.owner_id = auth.uid())
);
create policy "Owners can delete integrations" on public.integrations for delete using (
  exists (select 1 from public.servers where servers.id = integrations.server_id and servers.owner_id = auth.uid())
);
create policy "Admins can manage all integrations" on public.integrations for all using (public.is_admin());

-- billing: Users can view their own billing
create policy "Users can view their billing" on public.billing for select using (auth.uid() = user_id);
create policy "Admins can manage all billing" on public.billing for all using (public.is_admin());

-- usage: Users can view their own usage
create policy "Users can view their usage" on public.usage for select using (
  auth.uid() = user_id or exists (
    select 1 from public.servers where servers.id = usage.server_id and servers.owner_id = auth.uid()
  )
);
create policy "Admins can manage all usage" on public.usage for all using (public.is_admin());

-- ============================================================
-- 4. ENABLE REALTIME
-- ============================================================

alter publication supabase_realtime add table public.security_events;
alter publication supabase_realtime add table public.server_statistics;
alter publication supabase_realtime add table public.bot_statistics;
alter publication supabase_realtime add table public.announcements;
alter publication supabase_realtime add table public.command_usage;
alter publication supabase_realtime add table public.status_services;
alter publication supabase_realtime add table public.feature_requests;

-- ============================================================
-- 5. INDEXES
-- ============================================================

create index if not exists idx_command_usage_server_id on public.command_usage(server_id);
create index if not exists idx_command_usage_created_at on public.command_usage(created_at);
create index if not exists idx_server_statistics_server_id on public.server_statistics(server_id);
create index if not exists idx_server_statistics_recorded_at on public.server_statistics(recorded_at);
create index if not exists idx_security_events_server_id on public.security_events(server_id);
create index if not exists idx_security_events_created_at on public.security_events(created_at);
create index if not exists idx_security_events_severity on public.security_events(severity);
create index if not exists idx_login_history_user_id on public.login_history(user_id);
create index if not exists idx_login_history_created_at on public.login_history(created_at);
create index if not exists idx_audit_logs_server_id on public.audit_logs(server_id);
create index if not exists idx_audit_logs_created_at on public.audit_logs(created_at);
create index if not exists idx_moderation_logs_server_id on public.moderation_logs(server_id);
create index if not exists idx_notifications_user_id on public.notifications(user_id);
create index if not exists idx_notifications_read on public.notifications(read);
create index if not exists idx_activity_logs_user_id on public.activity_logs(user_id);
create index if not exists idx_activity_logs_server_id on public.activity_logs(server_id);
create index if not exists idx_support_tickets_user_id on public.support_tickets(user_id);
create index if not exists idx_support_tickets_status on public.support_tickets(status);
create index if not exists idx_ticket_messages_ticket_id on public.ticket_messages(ticket_id);
create index if not exists idx_webhooks_server_id on public.webhooks(server_id);
create index if not exists idx_integrations_server_id on public.integrations(server_id);
create index if not exists idx_billing_user_id on public.billing(user_id);
create index if not exists idx_usage_user_id on public.usage(user_id);
create index if not exists idx_usage_server_id on public.usage(server_id);
create index if not exists idx_feature_requests_user_id on public.feature_requests(user_id);
create index if not exists idx_feedback_user_id on public.feedback(user_id);
create index if not exists idx_api_keys_user_id on public.api_keys(user_id);
create index if not exists idx_bot_statistics_recorded_at on public.bot_statistics(recorded_at);
