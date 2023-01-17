<script lang="ts">
	interface SocialProvider {
		name: string;
		link: string;
	}
	interface Social {
		name: string;
		link: string;
		icon: string;
	}

	const socials: Social[] = [
		{
			name: 'LinkedIn',
			link: 'https://linkedin.com/company/penn-climate-ventures'
		},
		{
			name: 'Facebook',
			link: 'https://facebook.com/pennclimateventures'
		},
		{
			name: 'Instagram',
			link: 'https://instagram.com/pennclimateventures'
		},
		{
			name: 'GitHub',
			link: 'https://github.com/Penn-Climate-Ventures'
		}
	].map((social: SocialProvider) => ({
		...social,
		icon: `/icons/${social.name.toLowerCase()}.png`
	}));
</script>

<ul>
	{#each socials as social}
		<li>
			<a href={social.link} target="_blank" rel="noopener noreferrer">
				{social.name}
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		text-align: left;
		padding: 0;
	}

	li {
		list-style-type: none;
		transition: all ease-in-out 0.15s;
		filter: brightness(0.75);
		margin: 0;

		&:hover {
			filter: brightness(1);
		}
	}
</style>
