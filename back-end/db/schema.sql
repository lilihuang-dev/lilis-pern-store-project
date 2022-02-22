DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS clocks;

CREATE TABLE clocks (
    id SERIAL PRIMARY KEY, 
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
    quantity INTEGER DEFAULT 0
);
