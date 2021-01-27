import { connect } from "react-redux";
import DailyIndex from "./daily_index";

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

export default connect(mSTP, mDTP)(DailyIndex);
