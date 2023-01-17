<script lang="ts">
	import '$lib/styles/_global.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<slot />
<Footer />
