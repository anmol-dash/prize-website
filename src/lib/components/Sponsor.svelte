<script lang="ts">
	export let name: string = '';
	// export let desc: string = '';
	export let height: number = 200;
	export let width: number = 200;
	export let isDefault: boolean = false;

	function getImgPath(name: string, isDefault: boolean) {
		if (isDefault) {
			return '';
		} else {
			return '/sponsors/' + name.replace(/[^a-zA-Z0-9]/g, '') + '.png';
		}
	}

	function handleImgError() {
		if (!isDefault) {
			isDefault = true;
		}
	}
</script>

<div style:height={height + 'px'} style:width={width + 'px'}>
	{#if isDefault}
		<img src={getImgPath(name, isDefault)} alt={name} on:error={handleImgError} />
	{:else}
		<p>{name}</p>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		flex-flow: column nowrap;
		text-align: center;
		justify-content: center;
	}

	img {
		margin: 0 auto;
	}
</style>
