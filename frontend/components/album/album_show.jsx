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
    this.state = {
      playing: false,
      track: props.track,
    };
    this.audio = React.createRef();
    this.handleTrack = this.handleTrack.bind(this);
  }

  componentDidMount() {
    if (
      this.props.artist.artistName === "Phish" &&
      this.props.album.showDate !== undefined
    ) {
      // this.props.getPhishAlbum(this.props.album.showDate);
      this.props.getPhishAlbum(this.props.album.showDate).then(() => {
        this.setState({ track: Object.values(this.props.tracks)[0] });
      });
    } else {
      // this.props.getAlbum(this.props.match.params.id);
      this.props.getAlbum(this.props.match.params.id).then(() => {
        this.setState({ track: Object.values(this.props.tracks)[0] });
      });
    }
  }

  componentDidUpdate() {
    debugger;
    let tracks = Object.values(this.props.tracks);
    if (!tracks.includes(this.state.track)) {
      this.setState({ track: Object.values(this.props.tracks)[0] });
    }
    // } else if (tracks[0].mp3) {
    //   this.audio.current.setState({ src: tracks[0].mp3 });
    // } else if (tracks[0].songUrl) {
    //   this.audio.current.setState({ src: tracks[0].songUrl });
    // }
    // if (this.state.track !== Object.values(this.props.tracks)[0]) {
    //   this.setState({ track: Object.values(this.props.tracks)[0] });
    // }
  }

  handleTrack(track) {
    if (track.mp3) {
      this.setState({ track });
      this.audio.current.setState(
        { src: track.mp3, title: track.title },
        () => {
          this.audio.current.togglePlay();
        }
      );
    } else {
      this.setState({ track });
      this.audio.current.setState(
        { src: track.songUrl, title: track.trackName },
        () => {
          this.audio.current.togglePlay();
        }
      );
    }
    // const trackPath = track.songURL ? track.songUrl : track.mp3;
    // this.setState({ song: trackPath });
  }

  playTrack() {}

  render() {
    if (!this.props.album) return null;
    if (this.state.track === undefined) return null;
    if (Object.values(this.props.tracks).length === 0) {
      return null;
    }
    const { album, tracks, artist } = this.props;
    const track = this.state.track;
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
        return (
          <PhishTrackItem
            track={track}
            ref={this.audio}
            key={i}
            handleTrack={this.handleTrack}
          />
        );
      });
    } else {
      trackItems = Object.values(tracks).map((track, i) => {
        return (
          <TrackItem
            track={track}
            ref={this.audio}
            key={i}
            handleTrack={this.handleTrack}
          />
        );
      });
    }
    // }

    // const { tracks, album, artist } = this.props;
    // const trackItems = tracks.map((track) => {
    //   return <TrackItem track={track} key={track.trackNum} />;
    // });
    debugger;
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
                track={track}
                // song={
                //   album.showDate !== undefined
                //     ? Object.values(tracks)[0].mp3
                //     : Object.values(tracks)[0].songUrl
                // }
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
