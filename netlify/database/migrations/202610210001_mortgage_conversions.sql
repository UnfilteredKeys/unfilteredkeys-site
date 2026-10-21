-- Netlify Database migration. No form contents are stored.
create table public.mortgage_conversion_outbox (
  mode text not null check (mode in ('validate','live')),
  id text not null,
  event jsonb not null,
  status text not null default 'pending',
  attempts integer not null default 0,
  due_at timestamptz not null default now(),
  lease uuid,
  primary key (mode,id)
);
alter table public.mortgage_conversion_outbox enable row level security;

create function public.enqueue_mortgage_conversion(p_mode text, p_event jsonb)
returns void language sql security invoker set search_path = public as $$
  insert into mortgage_conversion_outbox(mode,id,event) values(p_mode,p_event->>'id',p_event)
  on conflict (mode,id) do nothing;
$$;

create function public.claim_mortgage_conversion(p_mode text, p_lease uuid)
returns setof public.mortgage_conversion_outbox language sql security invoker set search_path = public as $$
  update mortgage_conversion_outbox set status='processing', lease=p_lease,
    due_at=now()+interval '2 minutes', attempts=attempts+1
  where (mode,id) in (
    select mode,id from mortgage_conversion_outbox
    where mode=p_mode and status in ('pending','retry','processing') and due_at<=now()
    order by due_at limit 1 for update skip locked
  ) returning *;
$$;

create function public.settle_mortgage_conversion(p_mode text, p_id text, p_lease uuid, p_status text, p_delay integer)
returns void language sql security invoker set search_path = public as $$
  update mortgage_conversion_outbox set status=p_status, lease=null,
    due_at=now()+make_interval(secs=>p_delay)
  where mode=p_mode and id=p_id and lease=p_lease;
$$;

revoke all on function public.enqueue_mortgage_conversion(text,jsonb) from public;
revoke all on function public.claim_mortgage_conversion(text,uuid) from public;
revoke all on function public.settle_mortgage_conversion(text,text,uuid,text,integer) from public;


