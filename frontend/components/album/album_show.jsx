import React from "react";
import artist_banner from "../artist/artist_banner";
import ArtistBanner from "../artist/artist_banner";
import ArtistSidebar from "../artist/artist_sidebar";
import TrackItem from "./track_item";

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
  }

  render() {
    debugger;
    if (!this.props.album) return null;
    debugger;

    const { album, tracks, artist } = this.props;

    const trackItems = Object.values(tracks).map((track) => {
      return <TrackItem track={track} />;
    });

    // const { tracks, album, artist } = this.props;
    // const trackItems = tracks.map((track) => {
    //   return <TrackItem track={track} key={track.trackNum} />;
    // });
    return (
      <div className="album-show-page-box">
        <div className="album-show-page-left">
          <div className="album-show-title-artist">
            <span>{album.title}</span>
            <span>{album.artistName}</span>
            <div className="audio-player">AUDIO PLAYER</div>
          </div>
          <div className="album-track-table-box">
            <table className="album-track-table">
              <tbody>{trackItems}</tbody>
            </table>
          </div>
          <div>
            <span>{album.description}</span>
            <span>{album.credits}</span>
          </div>
        </div>
        <div className="album-show-page-right">
          <div className="album-show-album-cover-box">
            <img
              src={album.photoUrl}
              alt=""
              className="album-show-album-cover"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumShow;
