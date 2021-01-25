import { connect } from "react-redux";
import AlbumShow from "./album_show";

const mSTP = ({ entities: { albums, tracks, artists } }, ownProps) => {
  return {
    tracks: Object.values(tracks),
    album: albums[ownProps.match.params.id],
    artist: artists,
  };
};

const mDTP = (dispatch) => {
  return {
    getAlbum: (albumId) => dispatch(getAlbum(albumId)),
  };
};

export default connect(mSTP, mDTP)(AlbumShow);
