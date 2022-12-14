import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchTvById } from '../../api/theMovieDB';
import { loadFailed, loadSuccess } from './detailsSlice';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* fetchTvShow({ payload }) {
	try {
		const data = yield call(fetchTvById, payload);
		yield call(delay, 1000);
		yield put(loadSuccess(data));
	} catch (err) {
		yield put(loadFailed(err.message));
	}
}

export function* detailsSaga() {
	yield takeLatest('details/loadStart', fetchTvShow);
}

export default detailsSaga;
