import { z } from 'zod';

export const createUserSchema = z.object({
	full_name: z.string().max(140, 'Name must be 140 characters or less.'),
	username: z.string().max(20, 'Username must be a max of 20 characters.'),
	password: z
		.string()
		.min(6, 'Password must be at least 6 characters long.')
		.max(20, 'Password must be 20 characters or less.'),
	email: z.string().email('Invalid email address.')
});

export const createPostSchema = z.object({
	content: z
		.string()
		.min(1, 'Tweets must be at least 1 character long.')
		.max(250, 'Tweets must be 250 characters or less')
});

export type CreateUserSchema = typeof createUserSchema;
