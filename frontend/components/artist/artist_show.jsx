import React from "react";
import Discog from "./discog";
import ArtistBanner from "./artist_banner";
import ArtistSidebar from "./artist_sidebar";

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getArtistAlbums(this.props.artistId);
  }

  render() {
    const albums = this.props.albums;
    const artist = this.props.artist;
    const items = albums.map((album) => {
      return (
        <Discog
          album={album}
          key={`${album.id}`}
          getAlbum={this.props.getAlbum}
          history={this.props.history}
        />
      );
    });
    return (
      <div className="artist-show-page-box">
        <ArtistBanner artist={artist} />
        <div className="artist-discog-box">
          <div className="discog-box">{items}</div>
          <ArtistSidebar artist={artist} />
        </div>
      </div>
    );
  }
}

export default ArtistShow;
