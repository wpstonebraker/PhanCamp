import { connect } from "react-redux";
import { postAlbum, receiveAlbumErrors } from "../../actions/album_actions";
import AlbumCreateForm from "./album_create_form";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    state: {
      title: "",
      artist_id: state.entities.users[state.session.id].id,
      year: 2021,
      price: "",
      description: "",
      credits: "",
      genres: "",
      photoFile: null,
      photoUrl: null,
      tracksArray: [],
    },
    errors: state.errors.album,
  };
};

const mDTP = (dispatch) => {
  return {
    createAlbum: (album) => dispatch(postAlbum(album)),
    sendErrors: (errors) => dispatch(receiveAlbumErrors(errors)),
  };
};

export default connect(mSTP, mDTP)(AlbumCreateForm);
