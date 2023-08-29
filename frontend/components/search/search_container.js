import { connect } from "react-redux";
import { withRouter } from "../../util/with_router_util";
import { getSearch } from "../../actions/search_actions";
import Search from "./search";

const mSTP = (state, ownProps) => {
  return {
    results: state.entities.search,
  };
};

const mDTP = (dispatch) => {
  return {
    getSearch: (terms) => dispatch(getSearch(terms)),
  };
};

export default withRouter(connect(mSTP, mDTP)(Search));
