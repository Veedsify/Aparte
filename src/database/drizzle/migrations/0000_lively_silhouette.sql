CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`firstname` varchar(255) NOT NULL,
	`lastname` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`created_at` varchar(255) NOT NULL,
	`updated_at` varchar(255) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
