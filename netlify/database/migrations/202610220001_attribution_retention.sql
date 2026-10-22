-- Keep retry metadata and references until delivery ends; then retain the ID tombstone
-- without click/browser matching references. Netlify form retention is separate.
create or replace function public.settle_mortgage_conversion(p_mode text, p_id text, p_lease uuid, p_status text, p_delay integer)
returns void language sql security invoker set search_path = public as $$
  update mortgage_conversion_outbox set status=p_status, lease=null,
    event=case when p_status in ('sent','rejected','expired','unverified')
      then event - 'oppref' - 'user' else event end,
    due_at=now()+make_interval(secs=>p_delay)
  where mode=p_mode and id=p_id and lease=p_lease;
$$;
revoke all on function public.settle_mortgage_conversion(text,text,uuid,text,integer) from public;
