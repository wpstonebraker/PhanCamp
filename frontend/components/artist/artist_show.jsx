import React from "react";
import Discog from "./discog";
import ArtistBanner from "./artist_banner";
import ArtistSidebar from "./artist_sidebar";
import { Route, Switch } from "react-router-dom";
import AlbumShowContainer from "../album/album_show_container";

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
          artistId={this.props.artistId}
        />
      );
    });
    return (
      <div className="show-page-outer">
        <div className="show-page-inner">
          <div className="show-page-box">
            <ArtistBanner
              artist={artist}
              getArtistAlbums={this.props.getArtistAlbums}
            />
            {/* <Route
          exact
          path="/artists/:id/albums/:id"
          component={AlbumShowContainer}
        /> */}

            <div className="artist-discog-box">
              <div className="discog-box">{items}</div>
              <ArtistSidebar artist={artist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistShow;
