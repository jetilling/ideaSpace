SELECT users.displayname, postedWorks.id
FROM postedWorks
JOIN users ON users.id = postedWorks.user_id
WHERE users.id = $1 AND postedWorks.title = $2;