import { connect } from "react-redux";
import SplashPlayer from "./splash_player";

const mSTP = (state, ownProps) => {
  debugger;
  return {
    track: state.entities.audio,
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(SplashPlayer);
