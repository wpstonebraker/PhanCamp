import { connect } from "react-redux";
import { getPhishShow, postPhishAlbum } from "../../actions/album_actions";
import PhishAlbumCreateForm from "./phish_album_create_form";

const mSTP = (state, ownProps) => {
  return {
    state: {
      title: "",
      artist_id: "",
      year: 2021,
      price: "",
      description: "",
      credits: "Trey Mike Fish Page",
      genres: "",
      photoFile: null,
      photoUrl: null,
      show_date: null,
      tracksArray: [],
    },
  };
};

const mDTP = (dispatch) => {
  return {
    createPhishAlbum: (album) => dispatch(postPhishAlbum(album)),
    getPhishShow: (date) => dispatch(getPhishShow(date)),
  };
};

export default connect(mSTP, mDTP)(PhishAlbumCreateForm);
