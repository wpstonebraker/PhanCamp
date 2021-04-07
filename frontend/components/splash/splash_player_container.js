import { connect } from "react-redux";
import SplashPlayer from "./splash_player";

const mSTP = (state, ownProps) => {
  debugger;
  if (state.entities.audio.albumId) {
    return {
      track: state.entities.audio,
      artist:
        state.entities.artists[
          state.entities.albums[state.entities.audio.albumId].artistId
        ],
      album: state.entities.albums[state.entities.audio.albumId],
      photo: state.entities.albums[state.entities.audio.albumId].photoUrl,
    };
  } else if (Object.values(state.entities.albums)[0] !== undefined) {
    debugger;
    return {
      // track: state.entities.audio,
      track:
        state.entities.tracks[
          Object.values(state.entities.albums)[0].trackIds[0]
        ],
      album: Object.values(state.entities.albums)[0],
      artist:
        state.entities.artists[
          state.entities.albums[
            state.entities.tracks[
              Object.values(state.entities.albums)[0].trackIds[0]
            ].albumId
          ].artistId
        ],
    };
  } else {
    return {
      track: state.entities.audio,
    };
  }
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(SplashPlayer);
