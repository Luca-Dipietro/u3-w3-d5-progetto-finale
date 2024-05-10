import { GET_ROCK_SONGS, GET_POP_SONGS, GET_HIPHOP_SONGS } from "../actions";

const initialState = {
  rock: [],
  pop: [],
  hipHop: [],
};

const songsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCK_SONGS: {
      return {
        ...state,
        rock: action.payload,
      };
    }
    case GET_POP_SONGS: {
      return {
        ...state,
        pop: action.payload,
      };
    }
    case GET_HIPHOP_SONGS: {
      return {
        ...state,
        hipHop: action.payload,
      };
    }
    default:
      return state;
  }
};
export default songsReducers;
