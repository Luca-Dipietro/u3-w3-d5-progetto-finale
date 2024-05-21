import { GET_SEARCH_RESULTS } from "../actions";

const initialState = {
  searchResults: [],
};

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducers;
