import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import type { InferModel } from 'drizzle-orm';

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	fullName: text('full_name').notNull(),
	username: text('username').notNull().unique(),
	password: text('password').notNull(),
	email: text('email').notNull().unique(),
	createdAt: timestamp('createdAt').defaultNow().notNull()
});

export type User = InferModel<typeof users>; // return type when queried
export type NewUser = InferModel<typeof users, 'insert'>;
