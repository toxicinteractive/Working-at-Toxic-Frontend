import { all, call } from 'redux-saga/effects';
import detailsSaga from './details/detailsSaga';
import searchSaga from './search/searchSaga';

export function* rootSaga() {
	yield all([call(searchSaga), call(detailsSaga)]);
}
