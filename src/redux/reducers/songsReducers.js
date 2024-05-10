import { GET_SONGS } from "../actions";

const initialState = {
  rock: [],
  pop: [],
  hipHop: [],
};

const songsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        [action.genre]: action.payload,
      };
    default:
      return state;
  }
};

export default songsReducers;
