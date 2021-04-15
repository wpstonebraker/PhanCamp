import { connect } from "react-redux";
import { getAllAlbums } from "../../actions/album_actions";
import Splash from "./splash";

const mSTP = (state, ownProps) => {
  return {
    albums: state.entities.albums,
    artists: state.entities.artists,
  };
};

const mDTP = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums()),
  };
};

export default connect(mSTP, mDTP)(Splash);
