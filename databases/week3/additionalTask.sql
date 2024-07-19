-- Active: 1719747071894@@127.0.0.1@3306@HYFdata


CREATE TABLE User
(
  id INT AUTO_INCREMENT ,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  `Registration datetime` DATETIME,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE Friendships (
    user_id INT,
    friend_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, friend_id),
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (friend_id) REFERENCES User(id) ON DELETE CASCADE
);
CREATE TABLE Post
(id INT AUTO_INCREMENT PRIMARY KEY,
  Title VARCHAR(255) NOT NULL,
  Content TEXT,
  `Creation datetime` DATETIME,
 `Update datetime` DATETIME,
`Relation to author` INT(10) NOT NULL,
Foreign Key (`Relation to author`) REFERENCES User(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE Comment
(
    id INT AUTO_INCREMENT PRIMARY KEY,
  Content Text,
  `Creation datetime` DATETIME,
 `Update datetime` DATETIME,
`Relation to author` INT(10) NOT NULL,
`Relation to post` INT(10) NOT NULL,
`Relation to optional parent comment` INT(10),
Foreign Key (`Relation to author`) REFERENCES User(id),
Foreign Key (`Relation to post`) REFERENCES Post(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE Reaction
(
    user_id INT(10) NOT NULL,
    post_id INT(10),
    comment_id INT(10),
  `like` INT(10),
  highfive INT(10),
  laugh INT(10),
  cry INT(10) ,
  PRIMARY KEY (user_id),
  FOREIGN KEY (user_id) REFERENCES User(id),
  Foreign Key (post_id) REFERENCES Post(id),
  FOREIGN KEY (comment_id) REFERENCES Comment(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;