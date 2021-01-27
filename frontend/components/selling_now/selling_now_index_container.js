import { connect } from "react-redux";
import { getSellingAlbums } from "../../actions/album_actions";
import SellingNowIndex from "./selling_now_index";

const mSTP = (state, ownProps) => {
  return {
    albums: Object.values(state.entities.albums),
  };
};

const mDTP = (dispatch) => {
  return {
    getSellingAlbums: () => dispatch(getSellingAlbums()),
  };
};

export default connect(mSTP, mDTP)(SellingNowIndex);
