import { connect } from "react-redux";
import EditAlbum from "./edit_albums";
import { deleteTrack, editTrack } from "../../actions/track_actions";

const mSTP = (state, ownProps) => {
  debugger;
  const user = state.entities.users[state.session.id];
  return {
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    user,
    state: {
      albumId: "",
      title: "",
      artist_id: user.id,
      year: 2021,
      price: "",
      description: "",
      credits: "",
      genres: "",
      photoFile: null,
      photoUrl: null,
      tracks: [],
      genresArray: [],
    },
  };
};

const mDTP = (dispatch) => {
  return {
    editTrack: (track) => dispatch(editTrack(track)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
  };
};

export default connect(mSTP, mDTP)(EditAlbum);
