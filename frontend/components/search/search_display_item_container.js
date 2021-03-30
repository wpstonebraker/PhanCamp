import { connect } from "react-redux";
import DisplayItem from "./search_display_item";

const mSTP = (state, ownProps) => {
  return {
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    artists: state.entities.artists,
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(DisplayItem);
