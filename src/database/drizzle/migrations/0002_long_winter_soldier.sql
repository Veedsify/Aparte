ALTER TABLE `users` ADD `created_at` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `users` ADD `updated_at` timestamp DEFAULT (now());