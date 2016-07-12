/*
INSERT INTO users (first_name, last_name, created_at, updated_at)
VALUES
('Chris', 'Baker', NOW(), NOW()),
('Diana', 'Smith', NOW(), NOW()),
('James', 'Johnson', NOW(), NOW()),
('Jessica', 'Davidson', NOW(), NOW()),
('James', 'Johnson', NOW(), NOW());
*/

SELECT * FROM users;

/*
INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES
(1, 4, NOW(), NOW()),
(1, 3, NOW(), NOW()),
(1, 2, NOW(), NOW()),
(2, 1, NOW(), NOW()),
(3, 1, NOW(), NOW()),
(4, 1, NOW(), NOW());
*/

-- SELECT * FROM friendships;

SELECT users.first_name AS first_name, users.last_name AS last_name, 
users2.first_name AS friend_first_name, users2.last_name AS friend_last_name
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users AS users2 ON users2.id = friendships.friend_id
ORDER BY friend_last_name;

