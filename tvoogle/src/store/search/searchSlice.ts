import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPreviewData, ISearch, ISearchResponse, PreviewModel } from '../../utils/types';
import { RootState } from '../store';

export type SearchStatus = 'idle' | 'loading' | 'load-failed' | 'load-success';

export interface ISearchState {
	searchResults: PreviewModel[];
	currentPage: number;
	totalPages: number;
	totalResults: number;
	error: string;
	status: SearchStatus;
}

const initialState: ISearchState = {
	searchResults: [],
	currentPage: 1,
	totalPages: 0,
	totalResults: 0,
	error: '',
	status: 'idle',
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchStart: (state, action: PayloadAction<ISearch>) => {
			state.status = 'loading';
		},
		searchFailed: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.status = 'load-failed';
		},
		searchSuccess: (state, action: PayloadAction<ISearchResponse>) => {
			const { page, results, total_pages, total_results } = action.payload;
			const previews = results.map((result) => {
				const preview = result as IPreviewData;
				return new PreviewModel(
					preview.original_name,
					preview.poster_path,
					preview.vote_average,
					preview.first_air_date,
					preview.original_language,
					preview.id
				);
			});
			state.searchResults = previews;
			state.currentPage = page;
			state.totalPages = total_pages;
			state.totalResults = total_results;
			state.error = '';
			state.status = 'load-success';
		},
		setCurrentSearchPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
		incrementCurrentPage: (state) => {
			state.currentPage = state.currentPage + 1;
		},
		decrementCurrentPage: (state) => {
			state.currentPage = state.currentPage - 1;
		},
	},
});

export const {
	searchStart,
	searchFailed,
	searchSuccess,
	setError,
	incrementCurrentPage,
	decrementCurrentPage,
	setCurrentSearchPage,
} = searchSlice.actions;

export const selectSearchResults = (state: RootState) => state.search.searchResults;
export const selectSearchCurrentPage = (state: RootState) => state.search.currentPage;
export const selectSearchTotalPages = (state: RootState) => state.search.totalPages;
export const selectSearchTotalResults = (state: RootState) => state.search.totalResults;
export const selectSearchStatus = (state: RootState) => state.search.status;
export const selectSearchError = (state: RootState) => state.search.error;

export default searchSlice.reducer;
