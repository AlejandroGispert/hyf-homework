-- Active: 1719747071894@@127.0.0.1@3306@mealDatabase

-- to create tables


-- Active: 1719747071894@@127.0.0.1@3306@mealDatabase

CREATE TABLE `Meal` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT ,
  `location` VARCHAR(255) NOT NULL,
  `when` DATETIME,
  `max_reservations` INT(10) UNSIGNED NULL,
  `price` DECIMAL,
  `created_date` DATE,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `Reservation` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `number_of_guests` INT(10) UNSIGNED NOT NULL,
  `meal_id` INT(10) UNSIGNED NOT NULL,
  `created_date` DATE,
  `contact_phonenumber`  VARCHAR(255) NOT NULL,
  `contact_name` VARCHAR(255) NOT NULL,
  `contact_email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  Foreign Key (`meal_id`) REFERENCES `Meal`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;





CREATE TABLE `Review` (
`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`title` VARCHAR(255) NOT NULL,
`description` TEXT,
`meal_id` INT(10) UNSIGNED NOT NULL,
`stars` INT(10) UNSIGNED NOT NULL,
 `created_date` DATE,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`meal_id`) REFERENCES `Meal`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO `Meal` (title, description,location,max_reservations,price,created_date) VALUES ('Pizza', 'Italian', 'Copenhagen',5,79,'2024-03-15 14:30:00'),('Hamburger', 'German', 'Copenhagen',6,89,'2024-03-15 14:30:00');

INSERT INTO `Reservation` (number_of_guests, meal_id,contact_phonenumber,contact_name,contact_email) VALUES (5, 2, 424428222,'pedro searez','pedrosearez@gmail.com'),(50, 1, 442228222,'tormenta vieja','tormenta@gmail.com');

INSERT INTO `Review` (title, description, meal_id,stars) VALUES ('Buenisimo', 'Italiano perfecctisima la mama del la comida', 1,5),('thunder', 'the food was stormy', 2,3)



-----------



-- homework done
-- Get all meals
SELECT * FROM `Meal`

-- Add a new meal
INSERT INTO `Meal` (title, description,location,max_reservations,price,created_date) VALUES ('Sushi', 'Japanese', 'Copenhagen',2,39,'2024-03-15 14:30:00')

-- Get a meal with any id, fx 1
SELECT * FROM `Meal` WHERE id = 1

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `Meal` 
SET when = '2024-12-12'
WHERE id = 1

-- Delete a meal with any id, fx 1
DELETE FROM `Meal` WHERE id = 3


-- Get all reservations
SELECT * FROM `Reservation`

-- Add a new reservation

INSERT INTO `Reservation` (number_of_guests,meal_id,contact_phonenumber,contact_name,contact_email)
VALUES (2,2,33445566,'Mor','mor@gmail.com')

-- Get a reservation with any id, fx 1

SELECT *
FROM `Reservation`
WHERE id = 1

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `Reservation`
SET created_date = '2015-01-21'
WHERE id = 1

-- Delete a reservation with any id, fx 1

DELETE FROM `Reservation`
WHERE id = 1

-- Get meals with good reviews

SELECT *

-- Get all reviews
SELECT * FROM `Review`

-- Add a new review

INSERT INTO `Review` ( `title`, `description`, `meal_id`, `stars`)
VALUES ('Good', 'Great food', 2, 5)

-- Get a review with any id, fx 1

SELECT * FROM Review
WHERE id = 5

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `Review`
SET stars = 4
WHERE id = 5


-- Delete a review with any id, fx 1
DELETE FROM `Review`
WHERE id = 8


-- Additional queries

-- Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries

-- Functionality
-- Get meals that has a price smaller than a specific price fx 90

SELECT * FROM Meal 
WHERE price < 90

-- Get meals that still has available reservations

SELECT * FROM Meal
WHERE max_reservations > 0

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * FROM Meal
WHERE title LIKE 'Pi%'

-- Get meals that has been created between two dates


SELECT * FROM Meal
WHERE created_date BETWEEN '2024-01-02' AND '2024-05-01'


-- Get only specific number of meals fx return only 5 meals

SELECT * FROM Meal
LIMIT 1


-- Get the meals that have good reviews

SELECT * FROM Meal
WHERE id IN (
    SELECT meal_id FROM Review WHERE stars > 2
)

-- Get reservations for a specific meal sorted by created_date

UPDATE `Reservation`
SET created_date = '2024-03-14'
WHERE id = 2


SELECT id,number_of_guests,created_date FROM Reservation
ORDER BY created_date ASC


-- Sort all meals by average number of stars in the reviews

SELECT m.*, AVG(r.stars) AS average_stars
FROM `Meal` m
LEFT JOIN `Review` r ON m.id = r.meal_id
GROUP BY m.id
ORDER BY average_stars DESC;