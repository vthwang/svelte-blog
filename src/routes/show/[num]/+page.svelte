<script>
	export let data;
	$: ({ episode, user } = data);
</script>

<h1>{user.email}</h1>

<h1>{episode.title}</h1>

<p>{@html episode.show_notes}</p>
