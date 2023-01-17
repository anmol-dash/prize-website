import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load() {
	// auto-redirect to default past competition
	// TODO: update each time a competition completes
	throw redirect(302, '/past-competitions/prize-2022');
}
