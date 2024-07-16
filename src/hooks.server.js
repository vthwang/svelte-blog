import { auth } from '$db/fake_auth.js';

export async function handle({ event, resolve }) {
	event.locals.user = auth();
	event.locals.this_is_just_a_test = 'test';
	event.cookies.set("test", "test", {
		path: '/',
	});

	return resolve(event);
}
