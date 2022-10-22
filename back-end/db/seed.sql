\c cta_dev;

INSERT INTO clocks (name, description, image, dimensions, color, material, price, rating, featured, stock, quantity) VALUES
('Ardale Wall Clock','This metal clock features a dark-colored face, big black numeral markings, light-colored text, and white hands. Perfect accent decor for a dining room, living room, bedroom, library, or office.','https://i.imgur.com/44aJMos.jpg','38 * 38 CM', 'Black','Metal' ,60, 4, true, 30, 1),
('Muskoka Wall Clock','Nothing ties a room together better than a great clock, and the one you choose to place in your home should reflect your personality and style.','https://i.imgur.com/VGquqpf.jpg','63 * 40 CM', 'Blue & White','Metal' ,48 , 3, false, 30, 1),
('Modern Wall Clock','Live a life you are proud of. Discover the value of time with the special Clock, an elegant eclectic timepiece. Revitalize your home decor as time passes silently with this modern double square clock.','https://i.imgur.com/f809dQ3.jpg','60 * 38 CM','Grey & Orange','Wood', 80,5,true, 30, 1),
('Daisy Wall Clock','Wall clock has no glass surface, so bigger numerals make it easy to read time even from distance. It is a perfect gift for children or someone who loves flowers.','https://i.imgur.com/kVyvwi0.jpg','69 * 69 CM','White & Yellow','Wood',66,5,true, 30, 1),
('Baron Wall Clock','Not just a wall clock, but an ornament','https://i.imgur.com/Yi3gSwG.jpg','60 * 50 CM', 'Black','Metal',100,5,true, 30, 1),
('Lux Wall Clock','The clock mechanism runs silent. Metal secure loop backing for easy hang. Suitable for indoor use only. Glam Design.','https://i.imgur.com/UpldvzG.jpg','50 * 50 CM','Gold','Metal',88,4,true,30, 1);

INSERT INTO users (clock_id, user_name, email, password, admin) VALUES
(),
(),
(),
(),
(),
();


INSERT INTO reviews (clock_id, review, review_date, rating ) VALUES
('1', 'Evan', 'My Favorite', 'July 20 2022 11:59 PM (EDT)', 4),
('2', 'Evan', 'My Favorite', 'Jun 20 2022 11:59 PM (EDT)', 5),
('3', 'Evan', 'My Least Favorite', 'Jan 10 2022 11:59 PM (EDT)', 3),
('2', 'Juliana', 'LOVE IT', 'Oct 20 2022 11:59 PM (EDT)', 5),
('2', 'David', 'NO NO', 'Jan 20 2022 11:59 PM (EDT)', 1),
('2', 'Mr. Mingo', 'NOT BAD', 'Aug 18 2022 11:59 PM (EDT)'3),
('2', 'Alison', 'A lifesaver! YES', 'Feb 10 2022 11:59 PM (EDT)', 4),
('3', 'Hannah', 'Insert Confetti Emoji Here. COOL', 'Jan 20 2022 10:59 PM (EDT)' 4),
('3', 'Gabi', 'I would like to recommand it', 'Jan 25 2022 11:59 PM (EDT)'5);

