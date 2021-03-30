import { connect } from "react-redux";
import {
  getAllAlbums,
  postAlbum,
  receiveAlbumErrors,
} from "../../actions/album_actions";
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
      genresArray: [],
    },
    errors: state.errors.album,
    genres: state.entities.genres,
  };
};

const mDTP = (dispatch) => {
  return {
    createAlbum: (album) => dispatch(postAlbum(album)),
    sendErrors: (errors) => dispatch(receiveAlbumErrors(errors)),
    getAllAlbums: () => dispatch(getAllAlbums()),
  };
};

export default connect(mSTP, mDTP)(AlbumCreateForm);
