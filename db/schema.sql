DROP DATABASE IF EXISTS burgers_DB;

CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
	id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured boolean default false,
    PRIMARY KEY (id)
);