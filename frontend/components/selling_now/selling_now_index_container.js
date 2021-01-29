import { connect } from "react-redux";
import { getAllAlbums } from "../../actions/album_actions";
import SellingNowIndex from "./selling_now_index";

const mSTP = (state, ownProps) => {
  return {
    albums: state.entities.albums,
    selling: state.entities.util.selling,
  };
};

const mDTP = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums()),
  };
};

export default connect(mSTP, mDTP)(SellingNowIndex);
