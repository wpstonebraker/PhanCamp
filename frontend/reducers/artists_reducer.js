import {
  RECEIVE_ALBUM,
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ARTIST_ALBUMS,
  RECEIVE_DELETED_ALBUM,
} from "../actions/album_actions";
import { RECEIVE_FEATURE_ARTISTS } from "../actions/artist_actions";
import { RECEIVE_USER_UPDATE } from "../actions/session_actions";

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUM:
      return Object.assign({}, state, action.payload.artist);
    case RECEIVE_ARTIST_ALBUMS:
      return Object.assign({}, state, action.albums.artist);
    case RECEIVE_FEATURE_ARTISTS:
      return Object.assign({}, state, action.payload.artists);
    case RECEIVE_ALL_ALBUMS:
      return Object.assign({}, state, action.payload.artists);
    case RECEIVE_USER_UPDATE:
      newState = Object.assign({}, state, {
        [action.payload.id]: action.payload,
      });
      return newState;
    case RECEIVE_DELETED_ALBUM:
      let newArtist = {
        [action.payload.artists.id]: { ...state[action.payload.artists.id] },
      };
      newArtist[action.payload.artists.id]["albumIds"] =
        action.payload.artists.albumIds;
      newState = Object.assign({}, state, newArtist);
      return newState;
    default:
      return state;
  }
};

export default artistsReducer;
