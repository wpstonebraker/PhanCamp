import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFeatureArtists } from "../../actions/artist_actions";
import FeatureIndex from "./feature_index";

const mSTP = ({ entities: { artists } }, ownProps) => {
  return {
    phish: artists.phish,
    theGD: artists["the Grateful Dead"],
    ween: artists.ween,
    goose: artists.goose,
  };
};

const mDTP = (dispatch) => {
  return {
    getFeatures: () => dispatch(getFeatureArtists()),
  };
};

export default connect(mSTP, mDTP)(withRouter(FeatureIndex));
