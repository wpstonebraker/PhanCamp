import { connect } from "react-redux";
import { withRouter } from "../../util/with_router_util";
import { getAllAlbums } from "../../actions/album_actions";
import DailyIndex from "./daily_index";

const mSTP = (state, ownProps) => {
  return {
    artists: state.entities.artists,
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
