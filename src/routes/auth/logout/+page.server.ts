import { redirect } from '@sveltejs/kit';

export function load(event) {
	event.cookies.delete('session', {
		path: '/'
	});

	throw redirect(302, '/auth');
}
