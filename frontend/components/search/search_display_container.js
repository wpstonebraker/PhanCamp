import { connect } from "react-redux";
import SearchDisplay from "./search_display";

const mSTP = (state, ownProps) => {
  return {
    search: state.entities.search,
    albums: state.entities.search.albums ? state.entities.search.albums : {},
    tracks: state.entities.search.tracks ? state.entities.search.tracks : {},
    artists: state.entities.search.artists ? state.entities.search.artists : {},
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(SearchDisplay);
