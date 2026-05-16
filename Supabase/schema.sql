create table profiles (
  id uuid primary key,
  full_name text,
  balance numeric default 0,
  created_at timestamp default now()
);

create table transactions (
  id bigint generated always as identity primary key,
  user_id uuid references profiles(id),
  type text,
  amount numeric,
  created_at timestamp default now()
);

create table kyc_documents (
  id bigint generated always as identity primary key,
  user_id uuid references profiles(id),
  file_url text,
  status text default 'pending',
  created_at timestamp default now()
);

create table notifications (
  id bigint generated always as identity primary key,
  user_id uuid references profiles(id),
  message text,
  read boolean default false,
  created_at timestamp default now()
);