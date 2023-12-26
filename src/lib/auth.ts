import { env } from '$env/dynamic/private';
import type { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

export function createToken(user: User) {
	return jwt.sign(
		{
			username: user.username,
			email: user.email
		},
		env.TOKEN_SECRET,
		{ expiresIn: '7d' }
	);
}
