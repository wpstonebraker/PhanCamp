import { RECEIVE_ALBUM } from "../actions/album_actions";

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case PLAY_TRACK:
      return action.album.tracks;
    default:
      return state;
  }
};

export default tracksReducer;
