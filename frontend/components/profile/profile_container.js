import { connect } from "react-redux";
import { updateProfile } from "../../actions/artist_actions";
import { receiveUserUpdate } from "../../actions/session_actions";
import Profile from "./profile";

const mSTP = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  return {
    user,
    genres: state.entities.genres,

    // state: {
    //   artist_name: user.artistName,
    //   email: user.email,
    // },
  };
};

const mDTP = (dispatch) => {
  return {
    receiveUserUpdate: (payload) => dispatch(receiveUserUpdate(payload)),
  };
};

export default connect(mSTP, mDTP)(Profile);
