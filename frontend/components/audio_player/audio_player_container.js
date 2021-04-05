import { connect } from "react-redux";
import { playTrack } from "../../actions/audio_actions";
import AudioPlayer from "./audio_player";

const mSTP = (state, ownProps) => {
  return {
    track: state.entities.audio,
    tracks: state.entities.tracks,
  };
};

const mDTP = (dispatch) => {
  return {
    playTrack: (track) => dispatch(playTrack(track)),
  };
};

export default connect(mSTP, mDTP)(AudioPlayer);
