<script lang="ts">
	import type { Competition } from '$lib/types/competition';
	import Container from '$lib/components/Container.svelte';
	import Person from '$lib/components/Person.svelte';
	import Sponsor from '$lib/components/Sponsor.svelte';
	import { Tier } from '$lib/types/enums';

	/** @type {import('./$types').PageData} */
	export let data: Competition;

	function getWinnerMembers(teamName: string) {
		for (const category of data.finalists || []) {
			for (const team of category.teams) {
				if (team.name === teamName) {
					return team.members;
				}
			}
		}
		return [];
	}
</script>

<!-- TODO
<Container>
	<h1>{data.name}</h1>
	<p>{data.desc}</p>
</Container>
-->

{#if data.winners !== undefined && data.winners.length > 0}
	<Container>
		<h2>Winners</h2>
		{#each data.winners || [] as winner}
			<h3>{winner.prize} – {winner.name}</h3>
			<p>{winner.summary}</p>
			<ul>
				{#each getWinnerMembers(winner.name) || [] as member}
					<li>
						{member.name}
						{#if member.school !== undefined && member.school.length > 0}
							, {member.school}
						{/if}
					</li>
				{/each}
			</ul>
		{/each}
	</Container>
{/if}

{#if data.finalists !== undefined && data.finalists.length > 0}
	{#if data.finalists.some((finalist) => finalist.category.length > 0)}
		<Container>
			<h2>Finalists</h2>
			{#each data.finalists || [] as finalist}
				{#if finalist.category.length > 0}
					<h3>{finalist.category}</h3>
					{#each finalist.teams as team}
						<h4>{team.name}</h4>
						<ul>
							{#each team.members as member}
								<li>
									{member.name}
									{#if member.school !== undefined && member.school.length > 0}
										, {member.school}
									{/if}
								</li>
							{/each}
						</ul>
					{/each}
				{/if}
			{/each}
		</Container>
	{/if}
{/if}

{#if data.affiliates !== undefined && data.affiliates.length > 0}
	{#each data.affiliates || [] as group}
		<Container>
			<h2>{group.category}</h2>
			<div class="affiliates">
				{#each group.people || [] as person}
					<Person name={person.name} headline={person.headline} />
				{/each}
			</div>
		</Container>
	{/each}
{/if}

{#if data.sponsor_tiers !== undefined && data.sponsor_tiers.length > 0}
	<Container>
		<h2>Sponsors</h2>
		{#each data.sponsor_tiers || [] as sponsors}
			<h3>{sponsors.tier}</h3>
			{#if sponsors.tier === Tier.Alum}
				<div class="affiliates">
					{#each sponsors.sponsors || [] as alum}
						<Person name={alum.name} headline={alum.desc} />
					{/each}
				</div>
			{:else}
				<div class="sponsors">
					{#each sponsors.sponsors as sponsor}
						<Sponsor name={sponsor.name} height={200} width={200} />
					{/each}
				</div>
			{/if}
		{/each}
	</Container>
{/if}

<style lang="scss">
	.affiliates {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 2rem 1rem;
		justify-content: space-around;
	}

	.sponsors {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
		justify-content: space-around;
	}
</style>
