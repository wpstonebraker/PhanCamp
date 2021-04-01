import {
  RECEIVE_ALBUM,
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ARTIST_ALBUMS,
  RECEIVE_PHISH_ALBUM,
} from "../actions/album_actions";

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ARTIST_ALBUMS:
      return {};
    case RECEIVE_ALL_ALBUMS:
      return {};
    case RECEIVE_ALBUM:
      return action.payload.tracks;
    case RECEIVE_PHISH_ALBUM:
      // newState = Object.assign({}, state);
      // Object.values(newState).forEach((track, i) => {
      //   track["songUrl"] = Object.values(action.payload.data.tracks)[i].mp3;
      // });
      // return newState;
      newState = {};
      action.payload.data.tracks.forEach((track) => {
        newState[track.id] = {
          artistName: "Phish",
          songUrl: track.mp3,
          trackName: track.title,
          trackNum: track.position,
        };
      });
      // action.payload.data.tracks.forEach((track) => {
      //   newState[track.position] = track;
      // });
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
