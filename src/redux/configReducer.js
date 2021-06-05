import { combineReducers, createStore } from "redux";
import { MovieReducer } from "./reducer/MovieReducer";

const rootReducer = combineReducers({
  MovieReducer,
});

export const store = createStore(rootReducer);
