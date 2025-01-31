-- Create users table to store user roles
create table if not exists public.users (
    id uuid references auth.users on delete cascade not null primary key,
    email text not null,
    role text not null check (role in ('admin', 'user')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS (Row Level Security)
alter table public.users enable row level security;

-- Create policies
create policy "Users can view their own data" on public.users
    for select using (auth.uid() = id);

create policy "Admin users can view all data" on public.users
    for all using (
        exists (
            select 1 from public.users
            where id = auth.uid() and role = 'admin'
        )
    );

-- Create function to handle user creation
create or replace function public.handle_new_user()
returns trigger as $$
begin
    insert into public.users (id, email, role)
    values (new.id, new.email, 'user');
    return new;
end;
$$ language plpgsql security definer;

-- Create trigger for new user creation
create trigger on_auth_user_created
    after insert on auth.users
    for each row execute procedure public.handle_new_user();
