
-- TASK 1 -Find out how many tasks are in the task table
SELECT count(id) FROM task

-- to select the distict ids
SELECT count(DISTINCT id) FROM task

-- TASK 2 -Find out how many tasks in the task table do not have a valid due date

SELECT count(*) FROM task WHERE due_date IS NULL

-- TASK 3 -Find all the tasks that are marked as done
SELECT * FROM task WHERE status_id = 3


-- TASK 4 -Find all the tasks that are not marked as done
SELECT * FROM task WHERE status_id != 3


-- TASK 5 -Get all the tasks, sorted with the most recently created first

SELECT * FROM task ORDER BY created ASC


-- TASK 6 -Get the single most recently created task
SELECT * FROM task ORDER BY created ASC LIMIT 1

-- TASK 7 - Get the title and due date of all tasks where the title or description contains database



SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%'


-- TASK 8 - Get the title and status (as text) of all tasks


SELECT task.title,status.name 
FROM task
INNER JOIN status ON task.status_id  = status.id


-- TASK 9 -Get the name of each status, along with a count of how many tasks have that status


SELECT COUNT(*), status.name
FROM task
INNER JOIN status ON task.status_id  = status.id
WHERE status_id IN (1, 2, 3)
GROUP BY status_id


-- TASK 10 -Get the names of all statuses, sorted by the status with most tasks first

SELECT COUNT(*), status.name
FROM task
INNER JOIN status ON task.status_id  = status.id
WHERE status_id IN (1, 2, 3)
GROUP BY status_id
ORDER BY COUNT(*) DESC