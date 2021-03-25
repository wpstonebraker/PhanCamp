import { connect } from "react-redux";
import { updateProfile } from "../../actions/artist_actions";
import Profile from "./profile";

const mSTP = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  return {
    user,
    // state: {
    //   artist_name: user.artistName,
    //   email: user.email,
    // },
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(Profile);
