create table if not exists public.admin_emails (
  email text primary key,
  created_at timestamptz default now()
);

alter table admin_emails enable row level security;

-- Solo lectura para usuarios autenticados
create policy "Authenticated can read admin_emails"
  on admin_emails for select
  to authenticated
  using (true);

-- Admin inicial
insert into public.admin_emails (email) values
  ('marinaaleksdev@gmail.com');
