import { call, put, takeLatest } from 'redux-saga/effects';
import { searchFailed, searchSuccess } from './searchSlice';
import { fetchTvShowsWithLang, fetchTvShowsWithQuery } from '../../api/theMovieDB';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* fetchWithQuery(searchObj) {
	try {
		const data = yield call(fetchTvShowsWithQuery, searchObj);
		yield call(delay, 500);
		yield put(searchSuccess(data));
	} catch (err) {
		yield put(searchFailed(err.message));
	}
}

export function* fetchWithLang(searchObj) {
	try {
		const data = yield call(fetchTvShowsWithLang, searchObj);
		yield call(delay, 500);
		yield put(searchSuccess(data));
	} catch (err) {
		yield put(searchFailed(err.message));
	}
}

export function* routeSearch({ payload }) {
	const { query, lang, page } = payload;
	if (query === '' && lang === '') {
		yield put(searchFailed('No provided search parameters'));
	} else if (query !== '') {
		yield call(fetchWithQuery, { query, page });
	} else if (lang !== '') {
		yield call(fetchWithLang, { lang, page });
	}
}

export function* searchSaga() {
	yield takeLatest('search/searchStart', routeSearch);
}

export default searchSaga;
