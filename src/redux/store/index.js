import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songsReducers from "../reducers/songsReducers";
import favouritesReducers from "../reducers/favouritesReducers";
import searchReducers from "../reducers/searchReducers";

const rootReducer = combineReducers({
  songs: songsReducers,
  favourites: favouritesReducers,
  search: searchReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
