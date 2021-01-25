import React from "react";
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
    if (!this.props.album) return null;
    debugger;

    const { tracks, album, artist } = this.props;
    const trackItems = tracks.map((track) => {
      return <TrackItem track={track} />;
    });
    return (
      <div className="show-page-box">
        <ArtistBanner artist={artist} />
        <div className="album-discog-box">
          <div className="album-detail-box">
            <div className="album-audio-player-box">
              <div className="audio-player-title">
                <div className="album-player-album-title">{album.title}</div>
                <div className="album-player-artist-name">
                  by {artist.artistName}
                </div>
                <div className="audio-player">AUDIO PLAYER PLACEHOLDER</div>
              </div>
            </div>
            <div>
              <img src={album.photoUrl} alt="" className="album-track-cover" />
            </div>
            <div className="album-track-box">
              <table>
                <tbody>{trackItems}</tbody>
              </table>
              <div>{album.description}</div>
              <div>{album.credits}</div>
            </div>
            <div className="album-sidebar">
              <ArtistSidebar artist={artist} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumShow;
