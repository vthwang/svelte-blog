<script>
	import { page } from '$app/stores';
</script>

<h1>Hi!</h1>
<h2>{$page.status}</h2>
<p>{$page.error?.message}</p>
