import type { Actions } from './$types';
import { createUserSchema } from '$lib/schemas';
import { createToken } from '$lib/auth';
import { superValidate } from 'sveltekit-superforms/server';
import { fail, redirect } from '@sveltejs/kit';
import prisma from '$lib/server/prisma';
import { z } from 'zod';
import bcrypt from 'bcrypt';

const loginUserSchema = z.object({
	username: z.string('Please enter a valid username'),
	password: z.string().min(1, 'Please enter a valid password')
});

export const load: PageLoad = async (event) => {
	const session = event.cookies.get('session');

	if (session) {
		throw redirect(302, '/home');
	}

	return {
		signUpForm: superValidate(createUserSchema),
		loginForm: superValidate(loginUserSchema)
	};
};

export const actions: Actions = {
	createUser: async (event) => {
		const signUpForm = await superValidate(event, createUserSchema);
		const hashedPassword = await bcrypt.hash(signUpForm.data.password, 10);

		if (!signUpForm.valid) {
			return fail(400, {
				signUpForm
			});
		}

		try {
			const user = await prisma.user.create({
				data: {
					full_name: signUpForm.data.full_name,
					username: signUpForm.data.username,
					password: hashedPassword,
					email: signUpForm.data.email
				}
			});

			const token = createToken(user);
			event.cookies.set('session', token, {
				httpOnly: true,
				expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
				path: '/'
			});
		} catch (error) {
			console.log(error);
		}

		return {
			signUpForm
		};
	},

	loginUser: async (event) => {
		const loginForm = await superValidate(event, loginUserSchema);

		if (!loginForm.valid) {
			return fail(400, {
				loginForm
			});
		}

		const user = await prisma.user.findUnique({
			where: { username: loginForm.data.username }
		});

		if (!user || !bcrypt.compareSync(loginForm.data.password, user.password)) {
			return fail(401, { username, password, invalid: true });
		}

		const token = createToken(user);
		event.cookies.set('session', token, {
			path: '/'
		});
		throw redirect(303, `/home`);

		return {
			loginForm
		};
	}
};
