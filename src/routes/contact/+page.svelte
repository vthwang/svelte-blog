<script>
	import { enhance } from '$app/forms';
</script>

<form use:enhance method="POST">
	<label for="name">
		Name: <input type="text" name="name" id="name" required />
	</label>
	<label for="email">
		Email: <input type="email" name="email" id="email" required />
	</label>
	<label for="message">
		Message: <textarea name="message" id="message" required />
	</label>
	<button type="submit"> Send Email </button>
</form>

<style>
	form {
		padding: 20px;
		display: flex;
		gap: 20px;
		flex-direction: column;
	}

	label {
		display: block;
	}
</style>
