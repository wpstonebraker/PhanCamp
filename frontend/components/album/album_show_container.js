import { connect } from "react-redux";
import { withRouter } from "../../util/with_router_util";
import { getAlbum, getPhishAlbum } from "../../actions/album_actions";
import { playPhishTrack, playTrack } from "../../actions/audio_actions";
import AlbumShow from "./album_show";

const mSTP = (state, ownProps) => {
  return {
    album: state.entities.albums[ownProps.albumId],
    artist: state.entities.artists[ownProps.artistId],
    tracks: state.entities.tracks,
    track: Object.values(state.entities.tracks)[0],
  };
};

const mDTP = (dispatch) => {
  return {
    getAlbum: (albumId) => dispatch(getAlbum(albumId)),
    getPhishAlbum: (date) => dispatch(getPhishAlbum(date)),
    playTrack: (track) => dispatch(playTrack(track)),
    playPhishTrack: (track) => dispatch(playPhishTrack(track)),
  };
};

export default connect(mSTP, mDTP)(withRouter(AlbumShow));
