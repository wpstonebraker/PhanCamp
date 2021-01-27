import {
  RECEIVE_ALBUM,
  RECEIVE_ARTIST_ALBUMS,
  RECEIVE_SELLING_ALBUMS,
} from "../actions/album_actions";

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUM:
      // newState = Object.assign({}, state, {
      //   [action.album.id]: action.album,
      // });
      // return newState;
      return action.album.albums;
    case RECEIVE_ARTIST_ALBUMS:
      return action.albums.albums;
    case RECEIVE_SELLING_ALBUMS:
      return action.payload.albums;
    default:
      return state;
  }
};

export default albumsReducer;
