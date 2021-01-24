import { RECEIVE_ARTIST_ALBUMS } from "../actions/album_actions";

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ARTIST_ALBUMS:
      return action.albums.artist;
    default:
      return state;
  }
};

export default artistsReducer;
