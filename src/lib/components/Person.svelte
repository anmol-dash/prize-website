<script lang="ts">
	import { onMount } from 'svelte';

	export let imgSrc: string = '';
	export let name: string = '';
	export let headline: string = '';
	export let isDefault = false;
	// export let bio = '';
	// export let linkedin = '';

	function getImgPath(name: string) {
		return '/people/' + name.replace(/[^a-zA-Z0-9]/g, '') + '.png';
	}

	function handleImgError() {
		if (!isDefault) {
			imgSrc = '/defaults/people.png';
			isDefault = true;
		}
	}

	onMount(() => {
		imgSrc = getImgPath(name);
	});
</script>

<div>
	<img src={imgSrc} on:error={handleImgError} alt={name} />
	<p><strong>{name}</strong></p>
	<p>{headline}</p>
</div>

<style lang="scss">
	div {
		text-align: left;
	}

	img {
		background-color: rgba(0, 0, 0, 10%);
		height: auto;
		width: 100%;
		margin: 0 auto;
	}

	p {
		margin: 0;
	}
</style>
