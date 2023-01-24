import { combineReducers } from "redux";
import languageReducer from "./language";
import searchReducer from "./search";
import sortMovieReducer from "./sortMovie";

export default combineReducers({
  search: searchReducer,
  language: languageReducer,
  sortBy: sortMovieReducer,
});
