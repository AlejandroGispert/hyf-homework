
-- Part 1
-- Add a task with these attributes: title, description, created, updated, due_date, 
-- status_id, user_id

insert into task (title, description, created, updated, due_date, status_id, user_id)
values ("more", "more investments", "2017-10-15 13:05:09", "2017-10-15 13:05:09","2017-10-15 13:05:09", 3, 1)

-- Change the title of a task
UPDATE task SET title = "investements" WHERE id = 1;
-- Change a task due date
UPDATE task SET due_date = "2017-10-15 13:05:09" WHERE id = 1;
-- Change a task status
SELECT title FROM task WHERE id = 1;
UPDATE task SET status_id = 1 WHERE id = 1;
-- Mark a task as complete
UPDATE task SET status_id = 3, description = "completed" WHERE id = 1;
-- Delete a task
DELETE FROM task WHERE id = 3




-- Part 2: School database
-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)

CREATE TABLE `Class` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `begins` DATETIME,
    `ends` DATETIME,
    PRIMARY KEY (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `Class` (`name`, `begins`, `ends`) VALUES ('Math', '2021-09-15 13:37:42', '2021-09-15 16:37:42');


-- Student: with the columns: id, name, email, phone, class_id (foreign key)


 CREATE TABLE `Student` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `email` varchar(255),
    `phone` int(20) ,
    `class_id` int(20) unsigned,
       PRIMARY KEY (`id`),
   FOREIGN KEY (`class_id`) REFERENCES `Class`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `Student` (`name`, `email`, `phone`,`class_id`) VALUES ('Albert', 'albert@something.com', '40404035',1);

-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
 CREATE INDEX idx_student_name ON `Student` (`name`);

-- Add a new column to the class table named status which can only have the following values:
--  not-started, ongoing, finished (hint: enumerations).


 ALTER TABLE `Class` ADD `status` ENUM('not-started', 'ongoing', 'finished') DEFAULT 'not-started' NOT NULL ;



Part 3: More queries


-- Get all the tasks assigned to users whose email ends in @spotify.com

SELECT task.title
FROM task
LEFT JOIN user ON task.user_id = user.id
WHERE email LIKE "%@spotify.com"

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title, status.name AS status
FROM task
LEFT JOIN user ON task.user_id = user.id
LEFT JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck'
AND task.status_id = 3;

-- Get all the tasks for 'Maryrose Meadows' that were created in september 
-- (hint: month(created)=month_number)
SELECT t.title, t.created
FROM task t
LEFT JOIN user u ON t.user_id = u.id
WHERE u.name = 'Maryrose Meadows'
AND DATE_FORMAT(t.created, '%m') = 09;

-- Find how many tasks where created in each month, e.g. 
-- how many tasks were created in october, how many tasks were created in november, etc.
--  (hint: use group by)

SELECT DATE_FORMAT(t.created, '%Y-%m') AS month, COUNT(*) AS task_count
FROM task t
LEFT JOIN user u ON t.user_id = u.id
WHERE u.name = 'Maryrose Meadows'
GROUP BY month
ORDER BY month;














Part 4: Creating a database
Using an entity relationship diagram, design the data model 
for an application of your choice. This can be anything, previous students have used a 
small business (with staff, offices, and job titles), a library (with books, genres, racks,
 members, and a borrowing log), or a farm (with animals, barns, and farmers).

Your application must include at least one many-to-many relationship 
and any supporting tables (linking tables) that are needed. 
The entity relationship diagram must describe what tables you will need, 
the columns in these tables, which column is the primary key, and the relationships 
between tables.

Next, using the entity relationship diagram as a starting point, 
write all the necessary CREATE TABLE statements to create all tables and relationships 
(foreign key constraints) for this data model.

Submit an image or PDF of your entity relationship diagram, 
and a .sql file with the CREATE TABLE statements.

