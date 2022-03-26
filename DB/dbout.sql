--
-- PostgreSQL database dump
--

-- Dumped from database version 13.5 (Ubuntu 13.5-0ubuntu0.21.04.1)
-- Dumped by pg_dump version 13.5 (Ubuntu 13.5-0ubuntu0.21.04.1)

-- Started on 2022-03-26 20:31:15 IST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 204 (class 1259 OID 24627)
-- Name: app_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.app_users (
    id integer NOT NULL,
    firstname character varying(50),
    lastname character varying(50),
    email character varying(155),
    password character varying(50),
    created_on timestamp without time zone,
    last_login timestamp without time zone
);


ALTER TABLE public.app_users OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 24604)
-- Name: app_users_seq_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.app_users_seq_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.app_users_seq_id OWNER TO postgres;

--
-- TOC entry 3043 (class 0 OID 0)
-- Dependencies: 201
-- Name: app_users_seq_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.app_users_seq_id OWNED BY public.app_users.id;


--
-- TOC entry 203 (class 1259 OID 24609)
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    run_on timestamp without time zone NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 24607)
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO postgres;

--
-- TOC entry 3044 (class 0 OID 0)
-- Dependencies: 202
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- TOC entry 200 (class 1259 OID 16385)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    email character varying,
    firstname character varying,
    lastname character varying,
    age integer,
    id integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 2898 (class 2604 OID 24612)
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- TOC entry 3037 (class 0 OID 24627)
-- Dependencies: 204
-- Data for Name: app_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.app_users (id, firstname, lastname, email, password, created_on, last_login) FROM stdin;
1	a	b	c	d	\N	\N
2	q	a	b	w	\N	\N
3	a	b	c	d	\N	\N
\.


--
-- TOC entry 3036 (class 0 OID 24609)
-- Dependencies: 203
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, name, run_on) FROM stdin;
\.


--
-- TOC entry 3033 (class 0 OID 16385)
-- Dependencies: 200
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (email, firstname, lastname, age, id) FROM stdin;
johndoe@gmail.com	john	doe	21	\N
bac@gmail.com	vick	\N	\N	\N
bac@gmail.com	vick	\N	\N	\N
\N	vick	\N	\N	\N
\N	vick	\N	\N	\N
	vick	\N	\N	\N
nnn	vick	\N	\N	\N
abc	\N	\N	\N	\N
abc	\N	\N	\N	\N
hhhh	\N	\N	\N	\N
	\N	\N	\N	\N
	\N	\N	\N	\N
aa	hhh	\N	\N	\N
hh	aa	\N	\N	\N
cc	aa	bb	\N	\N
\.


--
-- TOC entry 3045 (class 0 OID 0)
-- Dependencies: 201
-- Name: app_users_seq_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.app_users_seq_id', 4, true);


--
-- TOC entry 3046 (class 0 OID 0)
-- Dependencies: 202
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 1, false);


--
-- TOC entry 2902 (class 2606 OID 24631)
-- Name: app_users app_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_users
    ADD CONSTRAINT app_users_pkey PRIMARY KEY (id);


--
-- TOC entry 2900 (class 2606 OID 24614)
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


-- Completed on 2022-03-26 20:31:15 IST

--
-- PostgreSQL database dump complete
--

