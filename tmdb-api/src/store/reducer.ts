import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import api from "./rtkApi";

export default combineReducers({
  entities: entitiesReducer,
  [api.reducerPath]: api.reducer,
});
