import { Prize } from '$lib/type/enums';
import type { Tier } from './enums';

type Competitor = {
	name: string;
	school?: string;
};

type Winner = {
	prize: Prize;
	name: string;
	summary?: string;
	links?: Array<Link>;
};

type Team = {
	name: string;
	members: Array<Competitor>;
};

type Affiliate = {
	name: string;
	headline: string;
	bio?: string;
	website?: string;
	linkedin?: string;
	twitter?: string;
};

type Sponsor = {
	name: string;
	desc?: string;
	website?: string;
	linkedin?: string;
	facebook?: string;
	twitter?: string;
};

export type Competition = {
	name: string;
	desc: string;
	winners: Array<Winner>;
	finalists: Array<{
		category: string;
		teams: Array<Team>;
	}>;
	affiliates: Array<{
		category: string;
		people: Array<Affiliate>;
	}>;
	sponsor_tiers?: Array<{
		tier: Tier;
		sponsors: Array<Sponsor>;
	}>;
};
