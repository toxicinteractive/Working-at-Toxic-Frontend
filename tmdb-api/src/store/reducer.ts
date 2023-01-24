import { combineReducers } from "redux";
import api from "./rtkApi";

export default combineReducers({
  [api.reducerPath]: api.reducer,
});
