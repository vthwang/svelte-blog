<script>
	import { enhance } from '$app/forms';

	export let form;
	$: console.log('form', form);
</script>

{#if form?.error_message}
	<p>{form.error_message}</p>
{/if}

{#if form?.message}
	<p>{form.message}</p>
{:else}
	<form
		use:enhance={({ form, data, action, cancel }) => {
			// form -> form element
			// data -> FormData object
			// action -> url form posts to
			// cancel() -> cancels form
			return ({ result, update }) => {
				// result -> 'ActionResult
				// update() -> runs all of the default use:enhance
				update();
			};
		}}
		action="?/email"
		method="POST"
	>
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
{/if}

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
