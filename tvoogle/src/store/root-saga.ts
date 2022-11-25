import { all, call } from 'redux-saga/effects';
import searchSaga from './search/searchSaga';

export function* rootSaga() {
	yield all([call(searchSaga)]);
}
