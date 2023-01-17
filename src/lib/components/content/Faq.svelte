<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	interface Qa {
		question: string;
		answer: string;
	}
	let qAndAs: Qa[] = [
		{
			question: 'What is the Prize competition?',
			answer: 'The Prize competition is a climate tech pitch competition'
		},
		{
			question: 'What is the Prize competition?',
			answer: 'The Prize competition is a climate tech pitch competition'
		},
		{
			question: 'What is the Prize competition?',
			answer: 'The Prize competition is a climate tech pitch competition'
		},
		{
			question: 'What is the Prize competition?',
			answer: 'The Prize competition is a climate tech pitch competition'
		}
	];
</script>

<Container>
	<h2 id="faq">Frequently Asked Questions</h2>

	<div>
		{#each qAndAs as qAndA}
			<details>
				<summary>{qAndA.question}</summary>
				<p>{qAndA.answer}</p>
			</details>
		{/each}
	</div>
</Container>

<style lang="scss">
	div {
		display: flex;
		flex-flow: column wrap;
		gap: 2rem;
	}

	details {
		&:not(:last-child):after {
			content: '';
			display: block;
			margin-top: 2rem;
			border-bottom: 2px solid var(--c-bg-deeper);
			width: 100%;
		}
	}

	summary {
		font-weight: bold;

		&::-webkit-details-marker {
			display: none;
		}

		&:hover {
			cursor: pointer;
		}
	}
</style>
