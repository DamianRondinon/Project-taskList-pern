/* We create a simple table to establish what we want to save.*/
CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
);