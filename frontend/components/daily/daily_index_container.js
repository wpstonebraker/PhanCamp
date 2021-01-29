import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllAlbums } from "../../actions/album_actions";
import DailyIndex from "./daily_index";

const mSTP = (state, ownProps) => {
  return {
    albums: state.entities.albums,
    daily: state.entities.util.daily,
  };
};

const mDTP = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums()),
  };
};

export default connect(mSTP, mDTP)(withRouter(DailyIndex));
