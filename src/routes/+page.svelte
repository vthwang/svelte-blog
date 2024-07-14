<script>
	import Test from '$lib/Test.svelte';
	import '$db/start';
	export let data;

	$: ({ latest_episode } = data);
</script>

<h1>Welcome to SvelteKit</h1>

<h3>{latest_episode.title}</h3>

<Test />
