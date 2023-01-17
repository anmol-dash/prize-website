<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { Link } from '$lib/types/link';

	interface LinkProvider {
		title: string;
		isAnchor: boolean;
	}

	let isActive: string = 'Prize 2022';
	let links: Link[] = [
		{ title: 'Prize 2022', isAnchor: false },
		{ title: 'Ideathon 2021', isAnchor: false },
		{ title: 'Prize 2021', isAnchor: false }
	].map((link: LinkProvider) => ({
		title: link.title,
		link: '/past-competitions/' + link.title.toLowerCase().replaceAll(' ', '-')
	}));
</script>

<Container>
	<h1>Past Competitions</h1>

	<ul>
		{#each links as link}
			<a
				href={link.link}
				on:click={() => (isActive = link.title)}
				class:active={isActive === link.title}
			>
				<li>{link.title}</li>
			</a>
		{/each}
	</ul>
</Container>

<slot />

<style lang="scss">
	h1 {
		text-align: center;
	}

	ul {
		display: flex;
		justify-content: center;
		gap: 30px;
		padding: 0;
	}

	li {
		list-style-type: none;
		font-weight: bold;
	}

	a {
		color: var(--c-text-mute);
		border: 2px solid var(--c-bg-deeper);
		border-radius: 0.25rem;
		padding: 0.25rem 0.5rem;

		&:hover {
			background-color: var(--c-bg-deeper);
			text-decoration: none;
		}

		&.active {
			color: var(--c-text);
			background-color: var(--c-bg-deeper);
		}
	}
</style>
