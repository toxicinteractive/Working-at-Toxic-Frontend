export interface ISearch {
	query: string;
	lang: string;
	page: number;
}

export interface ISearchQueryPage {
	query: string;
	page: number;
}

export interface ISearchLangPage {
	lang: string;
	page: number;
}

export interface ISearchError {
	message: string;
	code?: number;
}

export interface ISearchResponse {
	page: number;
	results: [];
	total_pages: number;
	total_results: number;
}

export interface IPreviewData {
	first_air_date: string;
	id: number;
	vote_average: number;
	original_name: string;
	poster_path: string;
	original_language: string;
}

export class PreviewModel {
	title: string;
	cover: string;
	avgRating: number;
	firstAirDate: string;
	lang: string;
	id: number;

	constructor(title: string, cover: string, avgRating: number, firstAirDate: string, lang: string, id: number) {
		this.title = title;
		this.cover = cover;
		this.avgRating = avgRating;
		this.firstAirDate = firstAirDate;
		this.lang = lang;
		this.id = id;
	}
}

export interface IDetailsData {
	name: string;
	first_air_date: string;
	last_air_date: string;
	genres: { id: number; name: string }[];
	homepage: string;
	in_production: boolean;
	number_of_episodes: number;
	number_of_seasons: number;
	overview: string;
	poster_path: string;
	vote_average: number;
	vote_count: number;
}
