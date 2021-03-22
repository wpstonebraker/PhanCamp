import { RECEIVE_ALBUM, RECEIVE_PHISH_ALBUM } from "../actions/album_actions";

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALBUM:
      return action.album.tracks;
    case RECEIVE_PHISH_ALBUM:
      // newState = Object.assign({}, state);
      // Object.values(newState).forEach((track, i) => {
      //   track["songUrl"] = Object.values(action.payload.data.tracks)[i].mp3;
      // });
      // return newState;
      newState = {};
      action.payload.data.tracks.forEach((track) => {
        newState[track.position] = track;
      });
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
