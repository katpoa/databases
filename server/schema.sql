-- DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  txt VARCHAR(20) NOT NULL,
  user_id INT,
  roomname VARCHAR(20)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) NOT NULL
);

-- possibly rooms?

/* Create a MySQL Database From the Interactive Prompt
From the interactive prompt, CREATE and USE a new database
Create a new table with at least 3 columns, one of them set as a primary key
Use the DESCRIBE <table-name> command to verify the setup of your new table
INSERT some new rows into your new table
Execute several queries
Use UPDATE key word in at least 2 different ways
 Exit the interactive prompt */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

