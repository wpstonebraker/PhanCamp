import { RECEIVE_ALBUM } from "../actions/album_actions";

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUM:
      newState = Object.assign({}, state, {
        [action.album.id]: action.album,
      });
      return newState;
    default:
      return state;
  }
};

export default albumsReducer;
