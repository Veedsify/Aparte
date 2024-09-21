ALTER TABLE `users` ADD `profile_picture` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `email_verified` boolean NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `email_verification_token` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `password_reset_token` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `email_verified_at` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `created_at`;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `updated_at`;