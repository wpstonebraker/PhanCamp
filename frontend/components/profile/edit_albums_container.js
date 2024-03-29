import { connect } from "react-redux";
import EditAlbum from "./edit_albums";
import { deleteTrack, editTrack } from "../../actions/track_actions";
import { deleteAlbum } from "../../actions/album_actions";

const mSTP = (state, ownProps) => {
  if (state.entities.artists[state.session.id] !== undefined) {
    // if (Object.keys(state.entities.artists).length) {
    const user = state.entities.artists[state.session.id];
    return {
      albums: state.entities.albums,
      tracks: state.entities.tracks,
      user,
      state: {
        artist_id: user.id,
        year: 2021,
      },
    };
  } else {
    return {
      albums: {},
      tracks: {},
      state: {},
    };
  }
};

const mDTP = (dispatch) => {
  return {
    editTrack: (track) => dispatch(editTrack(track)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    deleteAlbum: (id) => dispatch(deleteAlbum(id)),
  };
};

export default connect(mSTP, mDTP)(EditAlbum);
