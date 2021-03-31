import { connect } from "react-redux";
import { getAlbum, getArtistAlbums } from "../../actions/album_actions";
import ArtistShow from "./artist_show";

const mSTP = ({ entities: { albums, artists }, session }, ownProps) => {
  return {
    albums: Object.values(albums),
    artistId: ownProps.match.params.id,
    artist: artists[ownProps.match.params.id],
    currentUserId: session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    getArtistAlbums: (artistId) => dispatch(getArtistAlbums(artistId)),
    getAlbum: (albumId) => dispatch(getAlbum(albumId)),
  };
};

export default connect(mSTP, mDTP)(ArtistShow);
