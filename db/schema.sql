DROP DATABASE IF EXISTS todos_dev;
CREATE DATABASE todos_dev;
\c todos_dev;


CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    todo_message TEXT,
    complete BOOLEAN
);
