-- Table: public.users

--DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users2
(
    email character varying COLLATE pg_catalog."default",
    firstname character varying COLLATE pg_catalog."default",
    lastname character varying COLLATE pg_catalog."default",
    age integer,
    id integer
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users2
    OWNER to postgres;