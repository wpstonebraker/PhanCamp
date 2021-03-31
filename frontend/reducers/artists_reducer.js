import {
  RECEIVE_ALBUM,
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ARTIST_ALBUMS,
} from "../actions/album_actions";
import { RECEIVE_FEATURE_ARTISTS } from "../actions/artist_actions";

const artistsReducer = (state = {}, action) => {
  debugger;
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUM:
      return Object.assign({}, state, action.album.artist);
    case RECEIVE_ARTIST_ALBUMS:
      return Object.assign({}, state, action.albums.artist);
    case RECEIVE_FEATURE_ARTISTS:
      return Object.assign({}, state, action.payload.artists);
    case RECEIVE_ALL_ALBUMS:
      return Object.assign({}, state, action.payload.artists);
    default:
      return state;
  }
};

export default artistsReducer;
