import React from "react";
import SplashPlayerContainer from "./splash_player_container";

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      discoverAlbums: [],
    };
    // this.initialAlbum = Object.values(props.albums)[0];
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleAlbumClick = this.handleAlbumClick.bind(this);
  }

  componentDidMount() {
    // setTimeout(() => {
    //   document.getElementById("discover-album-tile-0").click();
    // }, 200);
    // setTimeout(() => {
    //   document.getElementById("play-button-box").click();
    // }, 250);
  }

  handleAlbumClick(albumId) {
    let album = Object.values(this.props.albums).filter((album) => {
      return album.id === albumId;
    })[0];

    if (album.showDate) {
      this.props
        .getPhishShow(album.showDate)
        .then((payload) => {
          let track = payload.data.tracks[0];
          this.props.receivePhishTrack(track);
          return track;
        })
        .then((track) => {
          this.props.playTrack(this.props.tracks[track.id]);
        });
      setTimeout(() => {
        document.getElementById("play-button-box").click();
        // let audioPlayer = document.getElementById("discover-audio-player");
        // audioPlayer.play();
      }, 250);
    } else {
      let trackId = album.trackIds[0];
      this.props.playTrack(this.props.tracks[trackId]);
      setTimeout(() => {
        document.getElementById("play-button-box").click();
        // let audioPlayer = document.getElementById("discover-audio-player");
        // audioPlayer.play();
      }, 100);
    }
  }

  handleTabClick(genreId) {
    let discoverAlbums = Object.values(this.props.albums).filter((album) => {
      return album.genreIds.includes(genreId);
    });
    this.setState({ discoverAlbums });
  }

  render() {
    const artists = this.props.artists;
    const albumTiles =
      this.state.discoverAlbums.length === 0
        ? Object.values(this.props.albums)
            .slice(0, 8)
            .map((album, i) => {
              debugger;
              return (
                <div
                  key={album.id}
                  id={`discover-album-tile-${i}`}
                  className="discover-album-tile"
                  onClick={() => this.handleAlbumClick(album.id)}
                >
                  <img
                    src={album.photoUrl}
                    alt=""
                    className="discover-album-tile-photo"
                  />

                  <li>{album.title}</li>
                  <li>{artists[album.artistId].artistName}</li>
                </div>
              );
            })
        : Object.values(this.state.discoverAlbums).map((album) => {
            return (
              <div
                key={album.id}
                className="discover-album-tile"
                onClick={() => this.handleAlbumClick(album.id)}
              >
                <img
                  src={album.photoUrl}
                  alt=""
                  className="discover-album-tile-photo"
                />

                <li>{album.title}</li>
                <li>{artists[album.artistId].artistName}</li>
              </div>
            );
          });
    const genreTabs = Object.values(this.props.genres).map((genre) => {
      return (
        <li
          key={genre.id}
          className="discover-genre-tab"
          onClick={() => this.handleTabClick(genre.id)}
        >
          {genre.genre}
        </li>
      );
    });
    return (
      <div id="discover-outer">
        <div id="discover-genre-container">
          <div id="discover-genre-box">{genreTabs}</div>
        </div>
        <div id="discover-albums-container">
          <div id="discover-albums-box">{albumTiles}</div>
          <SplashPlayerContainer />
        </div>
      </div>
    );
  }
}

export default Discover;
