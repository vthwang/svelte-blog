<script>
	import Test from '$lib/Test.svelte';
	import '$db/start';
	export let data
</script>

<h1>Welcome to SvelteKit</h1>
<h1>{data.latest_episode.title}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/about">About US</a>

<Test />
