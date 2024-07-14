export async function load({ fetch }) {
	const res = await fetch('https://syntax.fm/api/shows/latest');
	const data = await res.json();
	console.log(data)

	return {
		latest_episode: data
	};
}
