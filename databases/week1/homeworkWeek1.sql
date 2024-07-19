-- correct TASK 1 -Find out how many tasks are in the task table
SELECT count(id) FROM task

-- to select the distict ids
SELECT count(DISTINCT id) FROM task

-- correct TASK 2 -Find out how many tasks in the task table do not have a valid due date

SELECT count(*) FROM task WHERE due_date IS NULL

--correct TASK 3 -Find all the tasks that are marked as done
SELECT task.title, status.name AS status FROM task 
JOIN status ON task.status_id = status.id
WHERE status.name = "Done";


--correct TASK 4 -Find all the tasks that are not marked as done
SELECT task.title, status.name AS status FROM task 
JOIN status ON task.status_id = status.id
WHERE status.name != "Done";


-- TASK 5 corrected -Get all the tasks, sorted with the most recently created first

SELECT * FROM task ORDER BY created DESC


-- TASK 6 corrected -Get the single most recently created task
SELECT * FROM task ORDER BY created DESC LIMIT 1

-- TASK 7 correct - Get the title and due date of all tasks where the title or description contains database

SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%'


-- TASK 8 correct - Get the title and status (as text) of all tasks


SELECT task.title,status.name 
FROM task
INNER JOIN status ON task.status_id  = status.id


-- TASK 9  corrected-Get the name of each status, along with a count of how many tasks have that status

INNER JOIN status ON task.status_id  = status.id

-- TASK 10 corrected -Get the names of all statuses, sorted by the status with most tasks first

SELECT COUNT(*), status.name
FROM task
INNER JOIN status ON task.status_id  = status.id
GROUP BY status_id
ORDER BY COUNT(*) DESC