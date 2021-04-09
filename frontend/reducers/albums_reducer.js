import {
  RECEIVE_ALBUM,
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ARTIST_ALBUMS,
  RECEIVE_DELETED_ALBUM,
  RECEIVE_SELLING_ALBUMS,
} from "../actions/album_actions";
import { RECEIVE_DELETED_TRACK } from "../actions/track_actions";

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let album;
  switch (action.type) {
    // case Object.keys(state).length === 1:
    //   return Object.assign({}, state, action.albums.albums);
    //   break;
    case RECEIVE_DELETED_ALBUM:
      newState = Object.assign({}, state);
      delete newState[action.payload.albums.id];
      return newState;
    case RECEIVE_DELETED_TRACK:
      album = Object.values(action.payload.albums)[0];
      newState = Object.assign({}, state, {
        [album.id]: album,
        // [action.album.id]: action.album,
      });
      return newState;
    case RECEIVE_ALBUM:
      album = Object.values(action.payload.albums)[0];
      newState = Object.assign({}, state, {
        [album.id]: album,
        // [action.album.id]: action.album,
      });
      return newState;
    // return action.album.albums;
    case RECEIVE_ARTIST_ALBUMS:
      return Object.assign({}, state, action.albums.albums);
    // return action.albums.albums;
    case RECEIVE_SELLING_ALBUMS:
      return action.payload.albums;
    case RECEIVE_ALL_ALBUMS:
      return Object.assign({}, state, action.payload.albums);
    default:
      return state;
  }
};

export default albumsReducer;
