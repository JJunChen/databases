DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;


CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username TEXT NOT NULL,
  text TEXT NOT NULL,
  roomname TEXT NOT NULL
);

/* Create other tables and define schemas for them here! */
CREATE TABLE usernames (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username TEXT NOT NULL
);

-- CREATE TABLE roomnames (

-- );




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

