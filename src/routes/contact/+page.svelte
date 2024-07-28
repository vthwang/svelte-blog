<script>
	import { invalidateAll } from '$app/navigation';
	import { applyAction, deserialize } from '$app/forms';

	export let form;
	$: console.log('form', form);

	// Standard onSubmit Event
	async function handleForm(event) {
		// this === form element
		// creating form data
		const data = new FormData(this);
		// Sending our own fetch post request
		const res = await fetch(this.action, {
			method: 'POST',
			body: data
		});
		// Get data by deserializing it
		const result = deserialize(await res.text());

		// See if it was success,
		// if success, reload all loaded data
		if (result.type === 'success') {
			// Reloads all data
			await invalidateAll();
		}

		// Populating form
		// will redirect if thrown redirect in action
		// show error page if thrown error
		applyAction(result);
	}
</script>

{#if form?.error_message}
	<p>{form.error_message}</p>
{/if}

{#if form?.message}
	<p>{form.message}</p>
{:else}
	<!-- <form
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
		action="/contact?/email"
		method="POST"
	> -->
	<form on:submit|preventDefault={handleForm} action="/contact?/email">
		<!--Action = route -> ?/ + action name -->
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
