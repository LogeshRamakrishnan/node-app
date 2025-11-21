# Steps to Install dependencies

cd backend

npm install

# Check DB available and execute the following commands

CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'password123';

GRANT ALL PRIVILEGES ON *.* TO 'appuser'@'localhost';

FLUSH PRIVILEGES;

CREATE DATABASE simpledb;

USE simpledb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

# start backend

cd backend

node server.js
