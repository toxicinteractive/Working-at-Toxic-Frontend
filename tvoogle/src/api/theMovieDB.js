export const fetchUrl = async (url) => {
	try {
		const resp = await fetch(url);
		if (!resp.ok) throw new Error('Something went wrong.');
		const data = await resp.json();
		return data;
	} catch (err) {
		throw err;
	}
};

export const fetchTvShowsWithQuery = async ({ query, page }) => {
	const url = `https://api.themoviedb.org/3/search/tv?api_key=${
		process.env.REACT_APP_API_KEY
	}&page=${page}&include_adult=false&query=${encodeURI(query)}`;

	try {
		const data = await fetchUrl(url);
		if (data.results.length === 0) throw new Error('No results could be found for this search');
		return data;
	} catch (err) {
		throw err;
	}
};

export const fetchTvShowsWithLang = async ({ lang, page }) => {
	const url = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_original_language=${lang}`;

	try {
		const data = await fetchUrl(url);
		if (data.results.length === 0) throw new Error('No results could be found for this search');
		return data;
	} catch (err) {
		throw err;
	}
};
