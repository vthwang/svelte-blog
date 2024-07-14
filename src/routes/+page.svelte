<script>
	import Test from '$lib/Test.svelte';
	import '$db/start';
	export let data;

	$: ({ latest_episode, all_episodes } = data);
</script>

<h1>Welcome to SvelteKit</h1>

<h3>{latest_episode.title}</h3>
<nav>
	<ul>
		{#each all_episodes as episode}
			<li>
				<a href={`/show/${episode.number}`}>{episode.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<Test />
