import { connect } from "react-redux";
import AlbumShow from "./album_show";

const mSTP = ({ entities: { albums, tracks, artists }, ownProps }) => {
  debugger;
  return {
    tracks: Object.values(tracks),
    album: albums,
    artist: artists,
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(AlbumShow);
