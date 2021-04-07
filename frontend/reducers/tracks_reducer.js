import {
  RECEIVE_ALBUM,
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ARTIST_ALBUMS,
  RECEIVE_PHISH_ALBUM,
} from "../actions/album_actions";
import {
  RECEIVE_DELETED_TRACK,
  RECEIVE_EDIT_TRACK,
  RECEIVE_PHISH_TRACK,
} from "../actions/track_actions";

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    // case RECEIVE_ARTIST_ALBUMS:
    //   return {};
    case RECEIVE_DELETED_TRACK:
      newState = Object.assign({}, state);
      delete newState[action.payload.tracks.id];
      return newState;
    case RECEIVE_EDIT_TRACK:
      newState = {};
      newState[action.payload.id] = action.payload;
      return Object.assign({}, state, newState);
    case RECEIVE_ALL_ALBUMS:
      return action.payload.tracks;
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
          showDate: action.payload.data.date,
        };
      });
      // action.payload.data.tracks.forEach((track) => {
      //   newState[track.position] = track;
      // });
      // return Object.assign({}, state, newState);
      return newState;
    case RECEIVE_PHISH_TRACK:
      let track = action.payload;
      newState = {};
      newState[track.id] = {
        artistName: "Phish",
        songUrl: track.mp3,
        trackName: track.title,
        trackNum: track.position,
        showDate: track.show_date,
        albumId: track.albumId,
      };
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default tracksReducer;
