-- Active: 1719747071894@@127.0.0.1@3306@jsonFile


Insert INTO authors (name) VALUES ("James Smith"),("Jane Jones"),("Aliya Awad"),("Igor Vladimir"),("Kim Jensen");

INSERT INTO tags (name) VALUES ("science"),("clickbait"), ("breaking"),("weather"), ("winter")

INSERT INTO news (title,content) VALUES ("BREAKING NEWS: Water is wet!","Scientists have discovered that water is wet, it's amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),
("Heavy Snowfall Expected this Weekend","Lots of snow is expected... Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
("BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!","Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ")



CREATE TABLE authors_tags
(
    author_id INT,
    tag_id INT,
    Foreign Key (author_id) REFERENCES authors(id),
    Foreign Key (tag_id) REFERENCES tags(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO authors_tags (author_id,tag_id) VALUES (1,1),(1,3),(2,4),(2,5),(3,2),(3,3);


CREATE TABLE news_authors
(
    news_id INT,
    authors_id INT,
    Foreign Key ( news_id) REFERENCES news(id),
    Foreign Key ( authors_id) REFERENCES authors(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO news_authors (news_id,authors_id) VALUES (1,1),(1,2),(2,3),(2,4),(3,2),(3,5);



SELECT title, authors.name AS author 
FROM news 
 JOIN authors 

 SELECT news.id,tags.name AS tags 
FROM news 
 JOIN tags 
 ORDER BY news.id ASC