import { RECEIVE_ALBUM, RECEIVE_ARTIST_ALBUMS } from "../actions/album_actions";

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  debugger;
  switch (action.type) {
    case RECEIVE_ALBUM:
      // newState = Object.assign({}, state, {
      //   [action.album.id]: action.album,
      // });
      // return newState;
      return action.album.albums;
    case RECEIVE_ARTIST_ALBUMS:
      return action.albums.albums;
    default:
      return state;
  }
};

export default albumsReducer;
