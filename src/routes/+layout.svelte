<script>
	import { browser, building, dev, version } from '$app/environment';
	import { navigating } from '$app/stores';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Episodes from './Episodes.svelte';
	import './styles.css';

	export let data;
	$: ({ all_episodes } = data);
	// browser -> boolean, if app is running in browser
	// building -> boolean, true if currently build for production
	// dev -> boolean, if in development mode
	// version -> config.kit.version.name
	console.log(browser, building, dev, version);
</script>

<Header />

{#if !!$navigating}
	<div class="loading">Loading</div>
{/if}

<main>
	<div class="main">
		<slot />
	</div>
	<aside>
		<Episodes episodes={all_episodes} />
	</aside>
</main>

<Footer />

<style>
	main {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 20px;
	}

	aside {
		order: -1;
	}

	.loading {
		position: fixed;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: blue;
		color: white;
	}
</style>
