import { error } from '@sveltejs/kit';
import { data as prize2022 } from './prize-2022';
import { data as prize2021 } from './prize-2021';
import { data as ideathon2021 } from './ideathon-2021';

/** @type {import('./$types').PageLoad} */
export function load({ params }: any) {
	// TODO: add new slug + data each time a competition completes
	if (params.slug === 'prize-2022') {
		return prize2022;
	} else if (params.slug === 'ideathon-2021') {
		return ideathon2021;
	} else if (params.slug === 'prize-2021') {
		return prize2021;
	}
	throw error(404, 'Not found');
}
