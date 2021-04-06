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
      credits: "Trey Anastasio, Jon Fishman, Mike Gordon, Page McConnell",
      genres: "",
      photoFile: null,
      photoUrl: null,
      showDate: null,
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
