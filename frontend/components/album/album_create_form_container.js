import { connect } from "react-redux";
import AlbumCreateForm from "./album_create_form";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users,
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(AlbumCreateForm);
