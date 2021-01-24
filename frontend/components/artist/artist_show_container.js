import { connect } from "react-redux";
import { getArtistAlbums } from "../../actions/album_actions";
import ArtistShow from "./artist_show";

const mSTP = ({ entities: { albums, artists } }, ownProps) => {
  return {
    albums: Object.values(albums),
    artistId: ownProps.match.params.id,
    artist: artists[ownProps.match.params.id],
  };
};

const mDTP = (dispatch) => {
  return {
    getArtistAlbums: (artistId) => dispatch(getArtistAlbums(artistId)),
  };
};

export default connect(mSTP, mDTP)(ArtistShow);
