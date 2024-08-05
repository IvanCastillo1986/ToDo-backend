DROP TABLE IF EXISTS todos;


CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    todo_message TEXT,
    complete BOOLEAN
);
