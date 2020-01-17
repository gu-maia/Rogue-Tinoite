CREATE OR REPLACE FUNCTION getMatchesOf (p_user_id integer)
   RETURNS TABLE (
      matcher_name VARCHAR,
      gender varchar,
      register_date timestamp,
      email   varchar,
      liketype  text
)
AS $$
BEGIN
   RETURN QUERY select usr.name matcher_name
,      gend.gender
,      usr.register_date
,      usr.email
,      (select case tuxm2.sta_like  when 'Y' then
                    'regular_like' else 'super_like' end liketype
                          from tnt_users_x_matches tuxm2
                          where tuxm2.user_id_matched = p_user_id
                          and   tuxm2.user_id_matcher = usr.id
                          and   (tuxm2.sta_like = 'Y' or tuxm2.sta_super_like = 'Y'))
from tnt_users_x_matches tuxm,
     tnt_users           usr,
     tnt_genders         gend
where tuxm.user_id_matcher = p_user_id
and   tuxm.user_id_matched = usr.id
and   usr.gender_id        = gend.id
and   usr.sta_active       = 'Y'
and   (tuxm.sta_like = 'Y' or tuxm.sta_super_like ='Y')
and   tuxm.user_id_matched in (select tuxm2.user_id_matcher
                          from tnt_users_x_matches tuxm2
                          where tuxm2.user_id_matched = p_user_id
                          and   (tuxm2.sta_like = 'Y' or tuxm2.sta_super_like = 'Y'));
END; $$

LANGUAGE 'plpgsql';
/
