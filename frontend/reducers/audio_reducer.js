import { PLAY_PHISH_TRACK, PLAY_TRACK } from "../actions/audio_actions";

const AudioReducer = (state = {}, action) => {
  Object.freeze(state);
  let track;

  debugger;
  switch (action.type) {
    case PLAY_TRACK:
      track = action.payload;
      return { ...track };
      break;
    case PLAY_PHISH_TRACK:
      track = {
        artistName: "Phish",
        trackName: action.payload.title,
        trackNum: action.payload.position,
        songUrl: action.payload.mp3,
      };
      return { ...track };
    default:
      return state;
  }
};

export default AudioReducer;
