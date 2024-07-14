export async function load({ fetch }) {
	// const parent_data = await parent();
	const res = await fetch('https://syntax.fm/api/shows/latest');
	const data = await res.json();

	return {
		latest_episode: data
	};
}
