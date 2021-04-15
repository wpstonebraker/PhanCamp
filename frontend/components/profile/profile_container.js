import { connect } from "react-redux";
import { getAllAlbums, getArtistAlbums } from "../../actions/album_actions";
import { updateProfile } from "../../actions/artist_actions";
import { receiveUserUpdate } from "../../actions/session_actions";
import Profile from "./profile";

const mSTP = (state, ownProps) => {
  if (Object.keys(state.entities.artists).length) {
    const user = state.entities.users[state.session.id];
    return {
      currentUserId: state.session.id,
      user,
      genres: state.entities.genres,
    };
  } else {
    return {
      currentUserId: state.session.id,
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
    getArtistAlbums: (artistId) => dispatch(getArtistAlbums(artistId)),

    receiveUserUpdate: (payload) => dispatch(receiveUserUpdate(payload)),
  };
};

export default connect(mSTP, mDTP)(Profile);
