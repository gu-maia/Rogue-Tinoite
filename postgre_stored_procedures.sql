CREATE OR REPLACE FUNCTION getmatchesof (p_user_id integer)
   RETURNS TABLE (
      matcher_name VARCHAR,
      name VARCHAR,
      created_at timestamp with time zone,
      email VARCHAR,
      liketype text)
AS $$
BEGIN
   RETURN QUERY select usr.name matcher_name
      ,gend."name"
      ,usr.created_at
      ,usr.email
      ,(select case lik2.sta_like
                when 'R' then
                'regular_like'
               else 'super_like'
               end liketype
         from likes lik2
         where lik2.matched_id = p_user_id
         and   lik2.matcher_id = usr.id
         and   lik2.sta_like in ('R', 'S'))
from   likes lik
      ,users usr
      ,genders gend
where lik.matcher_id = p_user_id
and   lik.matched_id = usr.id
and   usr.gender_id    = gend.id
and   usr.sta_active       = 'Y'
and   lik.sta_like in ('R', 'S')
and   lik.matched_id in (select lik2.matcher_id
                          from likes lik2
                          where lik2.matched_id = p_user_id
                          and   lik2.sta_like in ('R', 'S'));
END; $$

LANGUAGE 'plpgsql';
