
CREATE DATABASE MoviesDB

USE MoviesDB
CREATE TABLE Movie(
    Id VARCHAR(255) PRIMARY KEY  NOT NULL,
    Title VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL,
    Image VARCHAR(255) NOT NULL,
)

USE MoviesDB
CREATE OR ALTER PROCEDURE addMovie(@id VARCHAR(255), @title VARCHAR(255),
 @description VARCHAR(255), @image VARCHAR(255) )
 AS
 BEGIN
    INSERT INTO Movie(Id, Title, [Description], [Image])
    VALUES(@id, @title, @description, @image)
 END

 CREATE OR ALTER PROCEDURE getMovies
 AS
 BEGIN
    SELECT * FROM Movie
 END