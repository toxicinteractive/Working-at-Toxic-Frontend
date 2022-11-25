import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import searchReducer from './search/searchSlice';
import detailsReducer from './details/detailsSlice';

const saga = createSagaMiddleware();
export const store = configureStore({
	reducer: {
		search: searchReducer,
		details: detailsReducer,
	},
	middleware: [saga],
});
saga.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
