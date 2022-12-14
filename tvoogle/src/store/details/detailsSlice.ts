import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDetailsData } from '../../utils/types';
import { RootState } from '../store';

export type LoadStatus = 'idle' | 'loading' | 'load-failed' | 'load-success';

export interface IDetailsState {
	id: string;
	result: IDetailsData | null;
	error: string;
	status: LoadStatus;
}

const initialState: IDetailsState = {
	id: '',
	result: null,
	error: '',
	status: 'idle',
};

export const detailsSlice = createSlice({
	name: 'details',
	initialState,
	reducers: {
		loadStart: (state, action: PayloadAction<string>) => {
			state.id = action.payload;
			state.status = 'loading';
		},
		loadFailed: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
			state.status = 'load-failed';
		},
		loadSuccess: (state, action: PayloadAction<IDetailsData>) => {
			state.result = action.payload;
			state.status = 'load-success';
			state.error = '';
		},
	},
});

export const { loadStart, loadFailed, loadSuccess } = detailsSlice.actions;

export const selectDetailsResult = (state: RootState) => state.details.result;
export const selectDetailsStatus = (state: RootState) => state.details.status;
export const selectDetailsError = (state: RootState) => state.details.error;

export default detailsSlice.reducer;
