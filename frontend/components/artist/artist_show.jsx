import React from "react";
import Discog from "./discog_item";
import ArtistBanner from "./artist_banner";
import ArtistSidebar from "./artist_sidebar";
import { Route, Switch } from "react-router-dom";
import AlbumShowContainer from "../album/album_show_container";
import DiscogIndex from "./discog_index";
import AlbumShow from "../album/album_show";

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

    // if (!artist) return null;
    debugger;

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
