import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songsReducers from "../reducers/songsReducers";
import favouritesReducers from "../reducers/favouritesReducers";

const rootReducer = combineReducers({
  songs: songsReducers,
  favourites: favouritesReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
