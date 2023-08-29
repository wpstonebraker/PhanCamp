import React from "react";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      // track: props.track,
      playing: false,
      currentTime: "00:00",
      duration: "00:00",
      src: props.track.songUrl || "",
      playButton: null,
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

  componentDidMount() {
    // let song;
    // let title;
    // if (this.track.mp3) {
    //   song = this.track.mp3;
    //   title = this.track.title;
    // }
    // if (this.track.songUrl) {
    //   song = this.track.songUrl;
    //   title = this.track.trackName;
    // }
    // this.setState({ src: song, playButton: window.playIcon, title });
    // if (Object.values(this.props.track).length !== 0) {
    // this.props.playTrack(Object.values(this.props.track));
    this.setState({
      src: this.props.track.songUrl,
      playButton: window.playIcon,
      title: this.props.track.trackName,
    });
    this.props.playing ? this.togglePlay() : null;
    this.props.playing ? this.togglePlay() : null;
    // }
    // this.audio.current.load();
  }

  componentWillUnmount() {}

  componentDidUpdate() {
    // this.props.playing ? null : this.togglePlay();
    if (
      Object.values(this.props.track).length !== 0 &&
      this.props.track.songUrl !== this.state.src
    )
      this.setState(
        {
          src: this.props.track.songUrl,
          playButton: window.playIcon,
          title: this.props.track.trackName,
          playing: false,
        },
        // () => this.audio.current.play()
        () => this.togglePlay()
      );
    // let song;
    // let title;
    // if (this.props.track.mp3 && this.state.src !== this.props.track.mp3) {
    //   song = this.props.track.mp3;
    //   title = this.props.track.title;
    //   this.setState({ src: song, playButton: window.playIcon, title });
    // }
    // if (
    //   this.props.track.songUrl &&
    //   this.state.src !== this.props.track.songUrl
    // ) {
    //   song = this.props.track.songUrl;
    //   title = this.props.track.trackName;
    //   this.setState({ src: song, playButton: window.playIcon, title });
    // }
    // let song;
    // let title;
    // if (this.track.mp3 && this.state.src !== this.track.mp3) {
    //   song = this.track.mp3;
    //   title = this.track.title;
    //   this.setState({ src: song, playButton: window.playIcon, title });
    //   console.log("yo");
    // }
    // if (this.track.songUrl && this.state.src !== this.track.songUrl) {
    //   song = this.track.songUrl;
    //   title = this.track.trackName;
    //   this.setState({ src: song, playButton: window.playIcon, title });
    //   console.log("yo");
    // }
  }

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
    let song;
    let title;
    // if (Object.values(this.props.track).length === 0) return null;
    // if (this.props.track === undefined) return null;
    // if (this.props.track === null) return null;
    // if (this.props.track.mp3 && this.state.src === this.props.track.mp3) {
    //   song = this.props.track.mp3;
    //   title = this.props.track.title;
    //   this.setState({ src: song, playButton: window.playIcon, title });
    // }
    // if (
    //   this.props.track.songUrl &&
    //   this.state.src === this.props.track.songUrl
    // ) {
    //   song = this.props.track.songUrl;
    //   title = this.props.track.trackName;
    //   this.setState({ src: song, playButton: window.playIcon, title });
    // }
    return (
      <div id="audio-player-box">
        <div onClick={this.togglePlay} id="play-button-box">
          <img src={this.state.playButton} id="play-button" alt="" />
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
            src={this.props.track.songUrl}
            // src={this.state.src}
          ></audio>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
