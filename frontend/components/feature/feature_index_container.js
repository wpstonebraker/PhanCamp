import { connect } from "react-redux";
import { getFeatureArtists } from "../../actions/artist_actions";
import FeatureIndex from "./feature_index";

const mSTP = ({ entities: { artists } }, ownProps) => {
  return {
    phish: artists.phish,
    theGD: artists["the Grateful Dead"],
  };
};

const mDTP = (dispatch) => {
  return {
    getFeatures: () => dispatch(getFeatureArtists()),
  };
};

export default connect(mSTP, mDTP)(FeatureIndex);
