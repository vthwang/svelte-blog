<script>
	import {navigating, page, updated, getStores } from '$app/stores';

	import Test from '$lib/Test.svelte';
	import '$db/start';
	export let data;

	$: console.log($navigating, $page)
	$: ({ latest_episode } = data);
</script>

<h1>Welcome to SvelteKit</h1>

<h3>{latest_episode.title}</h3>

<Test />
