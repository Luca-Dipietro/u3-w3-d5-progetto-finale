export const GET_ROCK_SONGS = "GET_ROCK_SONGS";
export const GET_POP_SONGS = "GET_POP_SONGS";
export const GET_HIPHOP_SONGS = "GET_HIPHOP_SONGS";
export const SONG_SELECTED = "SONG_SELECTED";

export const songSelectedAction = (song) => ({ type: SONG_SELECTED, payload: song });

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
