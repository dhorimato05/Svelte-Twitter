import type { PageLoad, Actions } from './$types';

export const load: PageLoad = async (event) => {
	const session = event.cookies.get('session');
	console.log(session);
};

export const actions: Actions = {
	createPost: async (event) => {
		return;
	}
};
