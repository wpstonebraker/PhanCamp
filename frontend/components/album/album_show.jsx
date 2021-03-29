import React from "react";
import artist_banner from "../artist/artist_banner";
import ArtistBanner from "../artist/artist_banner";
import ArtistSidebar from "../artist/artist_sidebar";
import AudioPlayer from "../audio_player/audio_player";
import PhishTrackItem from "./phish_track_item";
import TrackItem from "./track_item";
// import AudioPlayer from "../audio_player/audio_player_container";

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  componentDidMount() {
    if (
      this.props.artist.artistName === "Phish" &&
      this.props.album.showDate !== undefined
    ) {
      this.props.getPhishAlbum(this.props.album.showDate);
    } else {
      this.props.getAlbum(this.props.match.params.id);
    }
  }

  componentDidUpdate() {}

  render() {
    if (!this.props.album) return null;
    if (Object.values(this.props.tracks).length === 0) return null;
    const { album, tracks, artist } = this.props;
    let trackItems;

    // if (artist.artistName === "Phish" && album.showDate !== undefined) {
    //   trackItems = [];
    //   this.getPhishAlbum(album.showDate).then((res) => {
    //     res.data.tracks.forEach((track) => {
    //       trackItems.push(<TrackItem track={track} />);
    //     });
    //   });
    // } else {
    if (album.showDate !== undefined) {
      trackItems = Object.values(tracks).map((track, i) => {
        return <PhishTrackItem track={track} ref={this.audio} key={i} />;
      });
    } else {
      trackItems = Object.values(tracks).map((track, i) => {
        return <TrackItem track={track} ref={this.audio} key={i} />;
      });
    }
    // }

    // const { tracks, album, artist } = this.props;
    // const trackItems = tracks.map((track) => {
    //   return <TrackItem track={track} key={track.trackNum} />;
    // });
    return (
      <div className="album-show-page-box">
        <div className="album-show-page-left">
          <div className="album-show-title-artist">
            <p id="album-show-title">{album.title}</p>
            <p
              id="album-show-artist"
              onClick={() => this.props.history.push(`/artists/${artist.id}`)}
            >
              by: {album.artistName}
            </p>
            <div>
              <AudioPlayer
                id="album-audio-player"
                ref={this.audio}
                song={
                  album.showDate !== undefined
                    ? Object.values(tracks)[0].mp3
                    : Object.values(tracks)[0].songUrl
                }
              />
              {/* <audio controls id="audio-player">
                <source
                  id="audio-player-source"
                  src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1lCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--186d9de110146fa7c63638c22e6eb50ccc7de6cd/1997-11-17Tweezer.mp3"
                  type="audio/mpeg"
                ></source>
              </audio> */}
            </div>
          </div>
          <div className="album-track-table-box">
            <table className="album-track-table">
              <tbody>{trackItems}</tbody>
            </table>
          </div>
          <div>
            <div className="album-show-description">
              <span>{album.description}</span>
            </div>
            <br />
            <div className="album-show-credits">
              <span>{album.credits}</span>
            </div>
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
