<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Faq from '$lib/components/content/Faq.svelte';
	import Partners from '$lib/components/content/Partners.svelte';
	import Timeline from '$lib/components/content/Timeline.svelte';
</script>

<svelte:head>
	<title>PCV Prize Competition</title>
</svelte:head>

<Container>
	<h1>Penn Climate Ventures<br />Prize Competition</h1>
</Container>

<Container>
	<h2 id="about">Pitch your startup idea</h2>
</Container>

<Container bgColor="shaded">
	<div class="row">
		<div>
			<h3>$10,000+</h3>
		</div>
		<div>
			<h3>400+ climate entrepreneurs</h3>
		</div>
	</div>
</Container>

<Timeline />
<Partners />
<Faq />

<style lang="scss">
	.row {
		display: flex;
		flex: row wrap;
		justify-content: space-evenly;
	}
</style>
