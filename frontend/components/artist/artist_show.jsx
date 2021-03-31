import React from "react";
import Discog from "./discog_item";
import ArtistBanner from "./artist_banner";
import ArtistSidebar from "./artist_sidebar";
import { Redirect, Route, Switch } from "react-router-dom";
import AlbumShowContainer from "../album/album_show_container";
import DiscogIndex from "./discog_index";
import AlbumShow from "../album/album_show";

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (
      this.props.artist === undefined ||
      this.props.artist.bannerUrl !== undefined
    ) {
      this.props.getArtistAlbums(this.props.match.params.id);
    }
  }
  componentDidUpdate() {
    // this.props.getArtistAlbums(this.props.match.params.id);
  }

  render() {
    debugger;
    if (this.props.artistId !== this.props.match.params.id) return null;
    if (this.props.artist === undefined) return null;
    if (
      (this.props.artist.id === this.props.currentUserId &&
        this.props.artist.bannerUrl === undefined) ||
      this.props.artist.thumbnailUrl === undefined
    ) {
      return <Redirect to="/edit-profile" />;
    }

    if (this.props.albums.length === 0) {
      return <Redirect to="/albums/create" />;
    }

    const artistId = this.props.artistId;
    const albums = [];
    this.props.albums.forEach((album) => {
      if (album.artistId == artistId) {
        albums.push(album);
      }
    });
    const artist = this.props.artist;

    if (!artist) return null;
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
              <div className="discog-box">
                <Switch>
                  <Route
                    path="/artists/:id/albums/:id"
                    render={(props) => {
                      return (
                        <AlbumShowContainer
                          albumId={this.props.location.pathname.split("/")[4]}
                          artistId={this.props.artistId}
                        />
                      );
                    }}
                  />
                  <Route
                    path="/artists/:id"
                    render={(props) => {
                      return (
                        <DiscogIndex
                          albums={albums}
                          history={this.props.history}
                          artistId={this.props.artistId}
                        />
                      );
                    }}
                  />
                </Switch>
              </div>
              <ArtistSidebar artist={artist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistShow;
