import React from "react";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: "00:00",
      duration: "00:00",
    };
    this.audio = React.createRef();
    this.progressBar = React.createRef();
    this.togglePlay = this.togglePlay.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
  }

  componentDidMount() {}

  togglePlay() {
    const audio = this.audio.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  convertTime(time) {
    const minutes = Math.floor(time / 60);
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(time - minutes * 60);
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${displayMinutes}:${displaySeconds}`;
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
    debugger;
    const audio = this.audio.current;
    const progressBar = this.progressBar.current;
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  render() {
    return (
      <div id="audio-player-box">
        <button onClick={this.togglePlay}>play</button>
        <div id="progress-bar-box">
          <div id="progress-bar">
            <div id="progress-bar-played" ref={this.progressBar}></div>
          </div>
        </div>
        <div id="duration-box">
          <div id="duration-display">
            {this.state.currentTime} / {this.state.duration}
          </div>
        </div>
        <audio
          controls
          onTimeUpdate={this.handleTime}
          id="audio-player"
          ref={this.audio}
          src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1lCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--186d9de110146fa7c63638c22e6eb50ccc7de6cd/1997-11-17Tweezer.mp3"
        ></audio>
      </div>
    );
  }
}

export default AudioPlayer;
