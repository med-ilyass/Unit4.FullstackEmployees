DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  birthday DATE NOT NULL,
  salary NUMERIC(10, 2) NOT NULL CHECK (salary >= 0)
);