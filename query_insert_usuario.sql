/* INSERT INTO `users`(
`email`,
`first_name`,
`last_name`,
`nickname`,
`password`,
`birthdate`,
`created_at`
)VALUES(
'mmauriciosev@gmail.com2',
'Mauricio2',
'Sevilla2',
null,
'123',
'1986-07-22',
NOW()
)
*/

UPDATE `users`
SET
`activated_at` = NOW
()
WHERE id= 1;

SELECT *
FROM users