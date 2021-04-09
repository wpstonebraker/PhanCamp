import { connect } from "react-redux";
import { getAllAlbums } from "../../actions/album_actions";
import { updateProfile } from "../../actions/artist_actions";
import { receiveUserUpdate } from "../../actions/session_actions";
import Profile from "./profile";

const mSTP = (state, ownProps) => {
  if (Object.keys(state.entities.artists).length) {
    const user = state.entities.users[state.session.id];
    return {
      user,
      genres: state.entities.genres,
    };
  } else {
    return {
      user: {},
      genres: {},
    };
  }

  // state: {
  //   artist_name: user.artistName,
  //   email: user.email,
  // },
};

const mDTP = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums()),

    receiveUserUpdate: (payload) => dispatch(receiveUserUpdate(payload)),
  };
};

export default connect(mSTP, mDTP)(Profile);
