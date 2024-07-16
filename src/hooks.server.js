import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$db/fake_auth.js';

// runs first
async function logger({ event, resolve }) {
	const start_time = Date.now();
	console.log('start_time', start_time);
	const response = await resolve(event);

	console.log(`${Date.now() - start_time}ms ${event.request.method} ${event.url.pathname}`);

	return response;
}

// runs second
function authorize({ event, resolve }) {
	event.locals.user = auth();
	event.locals.this_is_just_a_test = 'test';
	event.cookies.set('test', 'test', {
		path: '/'
	});
	return resolve(event);
}

export const handle = sequence(logger, authorize);

// Intercepting Fetch
// export function handleFetch({request, fetch}) {
// 	return fetch(request);
// }

// Intercepting Errors
// export function handleError({error, event}) {
// 	return {
// 		message: 'Oops! Something went wrong.',
// 		code: error.code
// 	}
// }
