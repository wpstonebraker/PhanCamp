import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPhishShow } from "../../actions/album_actions";
import { playPhishTrack, playTrack } from "../../actions/audio_actions";
import { receivePhishTrack } from "../../actions/track_actions";
import Discover from "./discover";

const mSTP = (state, ownProps) => {
  return {
    genres: state.entities.genres,
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    artists: state.entities.artists,
  };
};

const mDTP = (dispatch) => {
  return {
    playTrack: (track) => dispatch(playTrack(track)),
    playPhishTrack: (track) => dispatch(playPhishTrack(track)),
    getPhishShow: (date) => dispatch(getPhishShow(date)),
    receivePhishTrack: (track) => dispatch(receivePhishTrack(track)),
  };
};

export default withRouter(connect(mSTP, mDTP)(Discover));
