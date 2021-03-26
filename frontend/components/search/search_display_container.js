import { connect } from "react-redux";
import SearchDisplay from "./search_display";

const mSTP = (state, ownProps) => {
  return {
    results: state.entities.search,
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(SearchDisplay);
