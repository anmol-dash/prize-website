<script lang="ts">
	import Socials from '$lib/components/Socials.svelte';
</script>

<footer>
	<!-- TODO -->
	Penn Climate Ventures © {new Date().getFullYear()}
	<br />
	<Socials />
</footer>

<style lang="scss">
	footer {
		background: var(--c-bg-deeper);
		margin-top: 120px;
		bottom: 0;
		padding: 60px;
	}
</style>
