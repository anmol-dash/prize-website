<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	interface Event {
		date: string;
		time: string;
		desc: string;
		loc?: string;
		link?: string;
	}

	function formatDate(dateStr: string) {
		let date = new Date(dateStr);
		date = new Date(date.getTime() - date.getTimezoneOffset() * -60000);

		return date.toLocaleString('en-US', {
			month: 'long',
			day: 'numeric',
			weekday: 'long'
		});
	}

	// date format: YYYY-MM-DD
	// time format: HH:MM AM/PM ET
	const timeline: Event[] = [
		{
			date: '2023-01-02',
			time: '12:00 AM ET',
			desc: 'Registration opens',
			link: 'https://airtable.com'
		},
		{
			date: '2023-01-03',
			time: '12:00 AM ET',
			desc: 'Registration opens',
			link: 'https://airtable.com'
		},
		{
			date: '2023-01-04',
			time: '12:00 AM ET',
			desc: 'Registration opens',
			link: 'https://airtable.com'
		},
		{
			date: '2023-01-05',
			time: '12:00 AM ET',
			desc: 'Registration opens',
			link: 'https://airtable.com'
		}
	].map((event: Event) => ({
		...event,
		date: formatDate(event.date)
	}));
</script>

<Container>
	<h2 id="timeline">Competition Timeline</h2>

	<div class="timeline">
		{#each timeline as event}
			<div class="event">
				<div class="left">
					<p><strong>{event.date}</strong></p>
					<p>{event.time}</p>
				</div>
				<div class="right">
					<p><strong>{event.desc}</strong></p>
					<p>{event.link}</p>
				</div>
			</div>
		{/each}
	</div>
</Container>

<style lang="scss">
	$gutter: 2px;
	$radius: 6px;

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		position: relative;

		&:before {
			content: '';
			background-color: var(--c-primary);
			position: absolute;
			top: 0;
			bottom: 0;
			left: calc(50% - $gutter/2);
			width: calc($gutter);
		}
	}

	.event {
		display: flex;
		flex-flow: row norap;
		gap: calc($radius * 6);

		&:before {
			content: '';
			background-color: var(--c-bg);
			border: 2px solid var(--c-primary);
			border-radius: 50%;
			position: absolute;
			left: calc(50% - ($gutter) - $radius);
			width: calc($radius * 2);
			height: calc($radius * 2);
		}
	}

	.left {
		text-align: right;
	}

	.right {
		text-align: left;
	}

	.left,
	.right {
		flex: 1 1 0;

		& > * {
			margin: 0;
		}
	}
</style>
