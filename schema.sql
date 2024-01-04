
-- Esquema de pgAdmin

--  para crear tabla con sus celdas
CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(50),
email VARCHAR(50)
);

-- crear lo que es el contenido de la tabla
INSERT INTO users (name, email) VALUES
('GianCarlo', 'gian@mail.com'),
('Carlos', 'carlos@mail.com'),
('Cesleste', 'celeste@mail.com'),
('Cornelia', 'cornelia@mail.com'),
('Esteban', 'esteban@mail.com'),
('Juan', 'juan@mail.com'),
('Flor', 'flor@mail.com'),
('Patricia', 'patito@mail.com'),
('Guadalupe', 'lupes@mail.com');

-- unir el contenido con la estructura de la tabla
SELECT * FROM users;
