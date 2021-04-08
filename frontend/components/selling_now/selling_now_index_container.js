import { connect } from "react-redux";
import { getAllAlbums } from "../../actions/album_actions";
import SellingNowIndex from "./selling_now_index";

const mSTP = (state, ownProps) => {
  debugger;
  return {
    artists: state.entities.artists,
    albums: state.entities.albums,
  };
};

const mDTP = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums()),
  };
};

export default connect(mSTP, mDTP)(SellingNowIndex);
