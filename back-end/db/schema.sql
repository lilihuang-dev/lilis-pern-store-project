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
    stock INTEGER DEFAULT 50,
    quantity INTEGER DEFAULT 0
);

-- DROP TABLE IF EXISTS users;

CREATE TABLE users (
    uid SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT,
    email VARCHAR(100) NOT NULL,
    user_name VARCHAR(50) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE email_subscriptions (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE
)



-- CREATE TABLE orders {
--     oid SERIAL PRIMARY KEY, 
--     uid INTEGER,
--     created_at timestamp,
--     modified_at timestamp
-- };


-- CREATE TABLE suborders (   
--     suborderid SERIAL PRIMARY KEY,
--     quantity INTEGER,
--     cid INTEGER REFERENCES clocks(cid),
--     oid INTEGER REFERENCES orders(oid),
--     ON DELETE CASCADE
-- );



























-- CREATE TABLE user_address {
--     aid SERIAL PRIMARY KEY,
--     uid INTEGER,
--     address_line1 VARCHAR,
--     address_line2 VARCHAR,
--     city VARCHAR,
--     postal_code VARCHAR,
--     country VARCHAR,
--     telephone VARCHAR,
--     mobile VARCHAR
-- }

-- CREATE TABLE user_payment {
--     payid SERIAL PRIMARY KEY, 
--     uid INTEGER,
--     payment_type VARCHAR,
--     provider VARCHAR,
--     account_no INTEGER,
--     expiry DATE
-- }




-- CREATE TABLE reviews (
--     rid SERIAL PRIMARY KEY,
--     review TEXT NOT NULL,
--     review_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     rating NUMERIC,
--     CHECK (rating >= 0 AND rating <= 5),
--     uid INTEGER REFERENCES users(uid),
--     cid INTEGER REFERENCES clocks(cid),
--     ON DELETE CASCADE
-- );







