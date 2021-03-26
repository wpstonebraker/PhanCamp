import React from "react";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: "00:00",
      duration: "00:00",
      src: "",
      playButton: null,
    };
    this.audio = React.createRef();
    this.progressBar = React.createRef();
    this.togglePlay = this.togglePlay.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleTrack = this.handleTrack.bind(this);
    this.playTrack = this.playTrack.bind(this);
  }

  componentDidMount() {
    this.setState({ src: this.props.song, playButton: window.playIcon });
  }

  togglePlay() {
    debugger;
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

  handleTrack(track) {
    debugger;
    this.setState({ src: track });
    // this.setState({ src: track.songUrl }, () => {
    this.playTrack();
    // });
  }

  playTrack() {
    const audio = this.audio.current;
    this.togglePlay();
    debugger;
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
    const progressBar = this.progressBar.current;
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  render() {
    return (
      <div id="audio-player-box">
        <button onClick={this.togglePlay}>
          <img src={this.state.playButton} id="play-button" alt="" />
        </button>
        <div id="progress-bar-box">
          <div id="progress-bar">
            <div id="progress-bar-played" ref={this.progressBar}></div>
          </div>
        </div>
        <div id="duration-box">
          <div id="duration-display">
            {this.state.currentTime} /{" "}
            {this.state.duration === `NaN:NaN` ? `00:00` : this.state.duration}
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
    );
  }
}

export default AudioPlayer;
