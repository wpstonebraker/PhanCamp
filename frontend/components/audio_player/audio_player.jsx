import React from "react";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: "00:00",
      duration: "00:00",
      src: props.track,
      playButton: null,
      title: "",
    };
    this.track = props.track;
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

  componentDidMount() {
    let song;
    if (this.track) {
      song = this.track ? this.track.mp3 : this.track.songUrl;
    }
    this.setState({ src: song, playButton: window.playIcon });
  }

  togglePlay() {
    const audio = this.audio.current;
    if (audio.paused) {
      audio.play();
      this.setState({ playButton: window.pauseIcon });
    } else {
      audio.pause();
      this.setState({ playButton: window.playIcon });
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
    this.togglePlay();
    const duration = this.convertTime(audio.duration);
    this.setState({ duration });
  }

  handleTime() {
    const audio = this.audio.current;
    const time = this.convertTime(audio.currentTime);
    const duration = this.convertTime(audio.duration);
    this.setState({ currentTime: time, duration });
    this.handleProgress();
  }
  //   handleTime() {
  //     const audio = this.audio.current;
  //     const time = audio.currentTime;

  //     const minutes = Math.floor(time / 60);
  //     const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  //     const seconds = Math.floor(time - minutes * 60);
  //     const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  //     this.setState({ currentTime: `${displayMinutes}:${displaySeconds}` });
  //     this.handleProgress();
  //   }

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
    if (this.track === null) return null;
    return (
      <div id="audio-player-box">
        <div onClick={this.togglePlay} id="play-button-box">
          <img src={this.state.playButton} id="play-button" alt="" />
        </div>
        <div id="audio-player-right">
          <div id="track-info-box">
            <div id="track-info-display">
              <span id="track-info-title">{this.state.title}</span>
              <span id="track-info-time">
                {this.state.currentTime} /{" "}
                {this.state.duration === `NaN:NaN`
                  ? `00:00`
                  : this.state.duration}
              </span>
            </div>
          </div>
          <div id="progress-bar-box">
            <div id="progress-bar" onClick={this.scrub} ref={this.progressBar}>
              <div id="progress-bar-played" ref={this.progressPlayed}></div>
              <div id="progress-bar-block" />
            </div>
          </div>
          <audio
            controls
            onTimeUpdate={this.handleTime}
            //   onLoadStart={this.playTrack}
            id="audio-player"
            ref={this.audio}
            src={this.state.src}
          ></audio>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
