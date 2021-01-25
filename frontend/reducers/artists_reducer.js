import { RECEIVE_ALBUM, RECEIVE_ARTIST_ALBUMS } from "../actions/album_actions";
import { RECEIVE_FEATURE_ARTISTS } from "../actions/artist_actions";

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUM:
      return action.album.artist;
    case RECEIVE_ARTIST_ALBUMS:
      return action.albums.artist;
    case RECEIVE_FEATURE_ARTISTS:
      return action.payload.artists;
    default:
      return state;
  }
};

export default artistsReducer;
