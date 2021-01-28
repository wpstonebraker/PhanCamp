import { connect } from "react-redux";
import { postAlbum } from "../../actions/album_actions";
import AlbumCreateForm from "./album_create_form";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    state: {
      title: "",
      artist_name: state.entities.users[state.session.id].artistName,
      year: 2021,
      price: "",
      description: "",
      credits: "",
      genres: "",
      photoFile: null,
      photoUrl: null,
    },
  };
};

const mDTP = (dispatch) => {
  return {
    createAlbum: (album) => dispatch(postAlbum(album)),
  };
};

export default connect(mSTP, mDTP)(AlbumCreateForm);
