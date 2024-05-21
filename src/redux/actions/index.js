export const GET_ROCK_SONGS = "GET_ROCK_SONGS";
export const GET_POP_SONGS = "GET_POP_SONGS";
export const GET_HIPHOP_SONGS = "GET_HIPHOP_SONGS";
export const SONG_SELECTED = "SONG_SELECTED";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS";

export const songSelectedAction = (song) => ({ type: SONG_SELECTED, payload: song });

export const addToFavouritesAction = (song) => ({ type: ADD_TO_FAVOURITES, payload: song });
export const removeFromFavouritesAction = (song) => ({ type: REMOVE_FROM_FAVOURITES, payload: song });

export const getSongAction = (artistName, genre) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        const { data } = await response.json();
        switch (genre) {
          case "rock":
            dispatch({ type: GET_ROCK_SONGS, payload: data });
            break;
          case "pop":
            dispatch({ type: GET_POP_SONGS, payload: data });
            break;
          case "hipHop":
            dispatch({ type: GET_HIPHOP_SONGS, payload: data });
            break;
          default:
            throw new Error("Invalid genre");
        }
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const getSearchResultsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_SEARCH_RESULTS, payload: data });
      } else {
        throw new Error("Error in fetching search results");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
