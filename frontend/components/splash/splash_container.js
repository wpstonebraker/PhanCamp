import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getAllAlbums } from "../../actions/album_actions";
import Splash from "./splash";

const mSTP = (state, ownProps) => {
  return {
    albums: state.entities.albums,
    artists: state.entities.artists,
    features: state.entities.util.features,
  };
};

const mDTP = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums()),
  };
};

export default withRouter(connect(mSTP, mDTP)(Splash));
