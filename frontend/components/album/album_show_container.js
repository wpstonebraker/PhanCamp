import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAlbum } from "../../actions/album_actions";
import AlbumShow from "./album_show";

const mSTP = (state, ownProps) => {
  return {
    album: state.entities.albums[ownProps.albumId],
    artist: state.entities.artists[ownProps.artistId],
    tracks: state.entities.tracks,
  };
};

const mDTP = (dispatch) => {
  return {
    getAlbum: (albumId) => dispatch(getAlbum(albumId)),
  };
};

export default connect(mSTP, mDTP)(withRouter(AlbumShow));
