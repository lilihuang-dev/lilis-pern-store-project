DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

-- DROP TABLE IF EXISTS clocks;

CREATE TABLE clocks (
    cid SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    dimensions VARCHAR(255),
    color VARCHAR(255),
    material VARCHAR(255),
    price INTEGER DEFAULT 0,
    rating NUMERIC,
    CHECK (rating >=0 AND rating <=5),
    featured BOOLEAN,
    stock INTEGER DEFAULT 0,
    quantity INTEGER DEFAULT 1
);

-- DROP TABLE IF EXISTS users;

CREATE TABLE users (
    uid SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    admin BOOLEAN DEFAULT FALSE,
    rid INTEGER REFERENCES reviews(rid),
);

CREATE TABLE reviews (
    rid SERIAL PRIMARY KEY,
    review TEXT NOT NULL,
    review_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5),
    clock_id INTEGER REFERENCES clocks (id),
    ON DELETE CASCADE
);


-- CREATE TABLE users_clocks (
--     uid
-- )