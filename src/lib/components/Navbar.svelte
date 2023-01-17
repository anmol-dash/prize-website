<script lang="ts">
	import Brand from '$lib/components/Brand.svelte';
	import type { Link } from '$lib/types/link';

	interface LinkProvider {
		title: string;
		isAnchor: boolean;
	}

	let isActive: string = '';
	let links: Link[] = [
		{ title: 'About', isAnchor: true },
		{ title: 'Timeline', isAnchor: true },
		{ title: 'Partners', isAnchor: true },
		{ title: 'FAQ', isAnchor: true },
		{ title: 'Rules', isAnchor: false },
		{ title: 'Past Competitions', isAnchor: false }
	].map((link: LinkProvider) => ({
		title: link.title,
		link: (link.isAnchor ? '/#' : '/') + link.title.toLowerCase().replaceAll(' ', '-')
	}));
</script>

<nav>
	<Brand />
	<ul>
		{#each links as link}
			<li>
				<a
					href={link.link}
					on:click={() => (isActive = link.link)}
					class:active={isActive === link.link}
				>
					{link.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		background-color: var(--c-bg);
		box-shadow: 0px 2px 10px var(--c-shadow);

		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 30px;
		top: 0;
		position: sticky;
		z-index: 100;
	}

	ul {
		margin-left: 15px;
		display: flex;
		gap: 30px;
		padding: 0;
	}

	li {
		list-style-type: none;
		color: var(--c-text);

		&:hover {
			text-decoration: underline;
		}
	}

	.active {
		font-weight: bold;
	}
</style>
