--
-- PostgreSQL database dump
--

\restrict vXEFTZH28c4MWyb5mhpZRDrPvLdoEmAX6tj4KmD9dJigxoAIUuiDl8wZOkXNaam

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

-- Started on 2026-01-07 20:12:18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 220 (class 1259 OID 16490)
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(500),
    price double precision NOT NULL,
    category character varying(100) NOT NULL,
    image_url character varying(512),
    featured boolean DEFAULT false NOT NULL,
    details text
);


--
-- TOC entry 219 (class 1259 OID 16489)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 5014 (class 0 OID 0)
-- Dependencies: 219
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- TOC entry 4856 (class 2604 OID 16493)
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- TOC entry 5008 (class 0 OID 16490)
-- Dependencies: 220
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products (id, name, description, price, category, image_url, featured, details) FROM stdin;
1	Orange	Juicy oranges for squeezing	1.8	Fruits	/images/orange.jpg	f	Vitamin C rich fresh oranges.
2	Tangerine	Seedless Satsuma tangerines	2.2	Fruits	/images/mandarin.jpg	f	Easy to peel fresh tangerines.
3	Pear	Sweet and large local pears	3	Fruits	/images/pear.jpg	f	Freshly harvested from local orchards.
4	Seedless Grapes	Sweet green grapes	5	Fruits	/images/grape.jpg	f	Fresh table grapes.
5	Watermelon	Sweet seedless watermelon	0.9	Fruits	/images/watermelon.jpg	f	Price per kg, perfect for summer.
6	Green Plum	Crunchy sour green plums	6	Fruits	/images/plum.jpg	t	Early harvest crispy plums.
7	Peach	Soft and juicy local peaches	3.2	Fruits	/images/peach.jpg	f	Fragrant and sweet.
8	Avocado	Ripe ready-to-eat avocado	4.5	Fruits	/images/avocado.jpg	f	Healthy fat source.
9	Quince	Fresh winter quince	2	Fruits	/images/quince.jpg	f	Ideal for desserts or fresh eating.
10	Vine Tomatoes	Fresh farm tomatoes	2.8	Vegetables	/images/tomato.jpg	t	Tasty and juicy vine tomatoes.
11	Cucumber	Crispy small cucumbers	2.2	Vegetables	/images/cucumber.jpg	f	Essential for breakfasts and salads.
12	Green Pepper	Fresh mild green peppers	3.5	Vegetables	/images/pepper.jpg	f	Handpicked fresh peppers.
13	Potatoes	Frying and baking potatoes	1.5	Vegetables	/images/potato.jpg	f	Large size fresh potatoes.
14	Yellow Onion	Cooking onions	1.2	Vegetables	/images/onion.jpg	f	Kitchen essential ingredient.
15	Garlic	Strong aromatic garlic	9.5	Vegetables	/images/garlic.jpg	t	Natural antibiotic properties.
16	Spinach	Cleaned fresh spinach	3	Vegetables	/images/spinach.jpg	f	Iron-rich winter vegetable.
17	Broccoli	Fresh broccoli florets	4	Vegetables	/images/broccoli.jpg	t	Healthy superfood.
18	Cauliflower	White fresh cauliflower	3.5	Vegetables	/images/cauliflower.jpg	f	Great for roasting or boiling.
19	Leek	Fresh local leeks	2.5	Vegetables	/images/leek.jpg	f	Star of olive oil dishes.
20	Dill	A bunch of fresh dill	1	Vegetables	/images/dill.jpg	f	Great addition to olive oil dishes.
21	Lettuce	Crispy iceberg lettuce	2.5	Vegetables	/images/lettuce.jpg	f	Fresh greens for salads.
22	Arugula	Spicy fresh arugula	1.2	Vegetables	/images/arugula.jpg	f	Perfect side for fish.
23	Green Beans	Fresh stringless green beans	5.5	Vegetables	/images/green_beans.jpg	f	New harvest tender beans.
24	Red Bell Pepper	Thick-walled roasting pepper	4.5	Vegetables	/images/red_pepper.jpg	f	Sweet and colorful.
25	Milk Chocolate	Milk chocolate with pistachios	3.5	Snacks	/images/choco.jpg	t	Premium pistachio chocolate bar.
26	Wheat Biscuits	Whole wheat snack biscuits	1.5	Snacks	/images/biscuit.jpg	f	Perfect match with tea.
27	Hazelnut Wafer	Crispy wafer with hazelnut cream	1	Snacks	/images/wafer.jpg	f	Layered hazelnut delight.
28	Corn Chips	Cheese flavored corn chips	2.8	Snacks	/images/corn_chips.jpg	f	Legendary cheesy flavor.
29	Gummy Bears	Fruit flavored soft candies	2	Snacks	/images/jelly.jpg	f	Favorite for kids and adults.
30	Mixed Nuts	Luxury mixed nuts	7.5	Snacks	/images/mixed_nuts.jpg	t	Almonds, hazelnuts, and cashews.
31	Raisins	Seedless dried raisins	4	Snacks	/images/raisin.jpg	f	Natural energy booster.
32	Chocolate Dragees	Colorful chocolate drajés	2.5	Snacks	/images/dragee.jpg	f	Candy coated chocolate treats.
33	Popcorn	Packaged ready-to-eat popcorn	1.8	Snacks	/images/popcorn.jpg	f	Cinema experience at home.
34	Dark Chocolate	70% cocoa dark chocolate	3.8	Snacks	/images/dark_choco.jpg	f	For real cocoa lovers.
35	Fruit Cake	Sliced fruit mosaic cake	1.5	Snacks	/images/cake.jpg	f	Homemade taste sliced cake.
36	Roasted Chickpeas	Classic yellow roasted chickpeas	2	Snacks	/images/chickpea.jpg	f	Filling traditional snack.
37	Raw Almonds	Sweet raw almonds	8.5	Snacks	/images/almond.jpg	f	Nutritious and fresh almonds.
38	Turkish Delight	Rose and pistachio delight	6.5	Snacks	/images/turkish_delight.jpg	f	Traditional Turkish treat.
39	Rice Cakes	Caramel flavored rice cakes	2.2	Snacks	/images/rice_cake.jpg	f	Light and low calorie.
40	Fruit Bar	Sugar-free natural fruit bar	3	Snacks	/images/fruit_bar.jpg	t	Healthy snack alternative.
41	Butter	Village style fresh butter	18	Breakfast	/images/butter.jpg	f	Real dairy taste.
42	Eggs 15pk	Organic free-range eggs	6.5	Breakfast	/images/egg.jpg	t	Fresh and nutritious large size.
43	Strawberry Jam	Homemade style fruit jam	5.5	Breakfast	/images/jam.jpg	f	Fresh jam with fruit pieces.
44	Black Tea	High quality loose leaf tea	9	Breakfast	/images/tea.jpg	t	Traditional breakfast tea.
45	Cheddar Cheese	Aged yellow cheddar	16	Breakfast	/images/kashar.jpg	f	Sharp and matured taste.
46	Green Olives	Cracked green olives with lemon	8.5	Breakfast	/images/green_olive.jpg	f	Aromatic and tangy.
47	Chocolate Spread	Hazelnut cocoa cream	9.5	Breakfast	/images/nutella.jpg	f	Kids favorite breakfast spread.
48	Turkish Soudjouk	Spicy fermented beef sausage	25	Breakfast	/images/sucuk.jpg	t	Traditional spicy sausage.
49	Beef Pastrami	Cured sliced beef pastrami	35	Breakfast	/images/pastirma.jpg	f	Luxury sliced deli meat.
50	Fresh Cream	Natural clotted cream	11	Breakfast	/images/clotted_cream.jpg	f	Best paired with honey.
51	String Cheese	Braided low salt cheese	13	Breakfast	/images/string_cheese.jpg	f	Fun and tasty cheese.
52	Olive Paste	Spiced black olive spread	4	Breakfast	/images/olive_paste.jpg	f	Practical bread spread.
53	Muesli	Fruit and nut muesli	7	Breakfast	/images/muesli.jpg	f	Healthy breakfast with milk.
54	Dried Tomatoes	Spiced sun-dried tomatoes in oil	6	Breakfast	/images/sun_dried.jpg	f	Gourmet breakfast choice.
55	Ayran	Traditional yogurt drink	1.2	Beverages	/images/ayran.jpg	f	Cool and salty yogurt drink.
56	Whole Milk 1L	Pasteurized whole cow milk	3.2	Beverages	/images/milk.jpg	t	Daily fresh milk.
57	Iced Tea	Peach flavored iced tea	2.8	Beverages	/images/ice_tea.jpg	f	Summer favorite refreshment.
58	Lemonade	Homemade style lemonade	3.5	Beverages	/images/lemonade.jpg	f	Fresh lemon and mint flavor.
59	Turkish Coffee	Freshly ground medium roast	5	Beverages	/images/coffee.jpg	t	Traditional Turkish coffee.
60	Turnip Juice	Spicy fermented turnip drink	2.5	Beverages	/images/turnip.jpg	f	Unique traditional taste.
61	Fruity Soda	Classic fruit flavored soda	1.5	Beverages	/images/gazoz.jpg	f	Refreshing nostalgia.
62	Sahlep	Hot winter milk drink	5.5	Beverages	/images/sahlep.jpg	f	Warming winter delight.
63	Instant Coffee	Gold series freeze dried coffee	8.5	Beverages	/images/instant_coffee.jpg	f	Quick and smooth caffeine.
64	Hot Chocolate	Rich cocoa powder mix	4.5	Beverages	/images/hot_cocoa.jpg	f	Creamy taste made with milk.
65	Herbal Tea	Chamomile and Sage mix	3	Beverages	/images/herbal_tea.jpg	f	Relaxing herbal tea bags.
\.


--
-- TOC entry 5015 (class 0 OID 0)
-- Dependencies: 219
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_id_seq', 65, true);


--
-- TOC entry 4859 (class 2606 OID 16503)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


-- Completed on 2026-01-07 20:12:18

--
-- PostgreSQL database dump complete
--

\unrestrict vXEFTZH28c4MWyb5mhpZRDrPvLdoEmAX6tj4KmD9dJigxoAIUuiDl8wZOkXNaam

