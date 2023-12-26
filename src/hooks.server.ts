import prisma from '$lib/server/prisma';
import jwt_decode from 'jwt-decode';
import type { Handle } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}
	let token;
	let user;
	if (session) {
		token = jwt_decode(session);
		user = await prisma.user.findUnique({
			where: { username: token.username },
			select: { username: true, full_name: true, avatar: true }
		});
	}
	if (user) {
		event.locals.user = {
			name: user.full_name,
			username: user.username,
			avatar: user.avatar
		};
	}

	return await resolve(event);
};
