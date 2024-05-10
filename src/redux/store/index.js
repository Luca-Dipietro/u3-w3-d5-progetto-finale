import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songsReducers from "../reducers/songsReducers";

const rootReducer = combineReducers({
  songs: songsReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
