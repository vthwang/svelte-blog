<script>
	export let data;
	$: ({ episode } = data);
</script>

<h1>{episode.title}</h1>

<p>{@html episode.show_notes}</p>
