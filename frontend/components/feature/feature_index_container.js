import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllAlbums } from "../../actions/album_actions";
import FeatureIndex from "./feature_index";

const mSTP = (
  {
    entities: {
      util: { features },
      artists,
    },
  },
  ownProps
) => {
  if (features) {
    return {
      phish: artists[features[0]],
      theGD: artists[features[1]],
      goose: artists[features[2]],
      ween: artists[features[3]],
    };
  } else {
    return {};
  }
};

const mDTP = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums()),
  };
};

export default connect(mSTP, mDTP)(withRouter(FeatureIndex));
