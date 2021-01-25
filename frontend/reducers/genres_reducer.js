import { RECEIVE_ARTIST_ALBUMS } from "../actions/album_actions";

const genresReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTIST_ALBUMS:
      return action.albums.genres;
    default:
      return state;
  }
};

export default genresReducer;
