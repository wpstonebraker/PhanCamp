import React from "react";

class SplashPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // track: props.track,
      playing: false,
      currentTime: "00:00",
      duration: "00:00",
      src: props.track.songUrl,
      playButton: window.playIcon,
      songUrl: "",
      title: props.track.trackName,
    };
    // this.track = props.track;
    this.audio = React.createRef();
    this.progressBar = React.createRef();
    this.progressPlayed = React.createRef();
    this.togglePlay = this.togglePlay.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleTrack = this.handleTrack.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.scrub = this.scrub.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {}

  togglePlay() {
    const audio = this.audio.current;
    if (audio.paused) {
      audio.play();
      this.setState({ playButton: window.pauseIcon, playing: true });
    } else {
      audio.pause();
      this.setState({ playButton: window.playIcon, playing: false });
    }
  }

  convertTime(time) {
    const minutes = Math.floor(time / 60);
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(time - minutes * 60);
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    // return Number.isNan(time) ? `00:00` : `${displayMinutes}:${displaySeconds}`;
    return `${displayMinutes}:${displaySeconds}`;
  }

  handleTrack(track, title) {
    this.setState({ src: track, title });
    // this.setState({ src: track.songUrl }, () => {
    this.playTrack();
    // });
  }

  playTrack() {
    const audio = this.audio.current;
    audio.play();
    this.setState({ playButton: window.pauseIcon });
    // const duration = this.convertTime(audio.duration);
  }

  handleTime() {
    const audio = this.audio.current;
    const time = this.convertTime(audio.currentTime);
    const duration = this.convertTime(audio.duration);
    this.setState({ currentTime: time, duration });
    this.handleProgress();
  }

  handleProgress() {
    const audio = this.audio.current;
    const progressPlayed = this.progressPlayed.current;
    const percent = (audio.currentTime / audio.duration) * 100;
    progressPlayed.style.flexBasis = `${percent}%`;
  }

  scrub(e) {
    e.preventDefault();
    const scrubTime =
      (e.nativeEvent.offsetX / this.progressBar.current.offsetWidth) *
      this.audio.current.duration;
    this.audio.current.currentTime = scrubTime;
  }

  render() {
    if (
      this.props.track === undefined
      // this.props.artist === undefined ||
      // this.props.album === undefined
    )
      return null;
    // const { artist, album } = this.props;
    const artist = this.props.artist || {};
    const album = this.props.album || {};
    return (
      // <div id="splash-player-box">
      //   <audio src={this.props.track.songUrl} ref={this.audio}></audio>
      // </div>
      <div>
        <div id="splash-player-photo-box">
          <img
            id="splash-player-photo"
            src={
              this.props.photo
                ? this.props.photo
                : this.props.album
                ? this.props.album.photoUrl
                : ""
            }
            alt=""
          />
        </div>
        <div id="audio-player-box">
          <div onClick={this.togglePlay} id="play-button-box">
            <img
              src={this.state.playing ? window.pauseIcon : window.playIcon}
              id="play-button"
              alt=""
            />
          </div>
          <div id="audio-player-right">
            <div id="track-info-box">
              <div id="track-info-display">
                <span id="track-info-title">{this.props.track.trackName}</span>
                <span id="track-info-time">
                  {this.state.currentTime} /{" "}
                  {this.state.duration === `NaN:NaN`
                    ? `00:00`
                    : this.state.duration}
                </span>
              </div>
            </div>
            <div id="progress-bar-box">
              <div
                id="progress-bar"
                onClick={this.scrub}
                ref={this.progressBar}
              >
                <div id="progress-bar-played" ref={this.progressPlayed}></div>
                <div id="progress-bar-block" />
              </div>
            </div>
            <audio
              controls
              onTimeUpdate={this.handleTime}
              //   onLoadStart={this.playTrack}
              id="splash-audio-player"
              ref={this.audio}
              src={this.props.track.songUrl}
              // src={this.state.src}
            ></audio>
          </div>
        </div>

        <div id="splash-player-details">
          <li
            onClick={() =>
              this.props.history.push(
                `/artists/${artist.id}/albums/${album.id}`
              )
            }
          >
            from the album {album.title}
          </li>
          <br />
          <li onClick={() => this.props.history.push(`/artists/${artist.id}`)}>
            by {artist.artistName}
          </li>
          <li>{artist.location}</li>
        </div>
      </div>
    );
  }
}

export default SplashPlayer;
