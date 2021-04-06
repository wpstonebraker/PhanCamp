import React from "react";

class SplashPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songurl: "",
    };
    this.audio = React.createRef();
  }

  componentDidUpdate() {
    debugger;
    this.audio.current.play();
  }

  render() {
    if (this.props.track === undefined) return null;
    debugger;
    return (
      <div id="splash-player-box">
        <audio src={this.props.track.songUrl} ref={this.audio}></audio>
      </div>
    );
  }
}

export default SplashPlayer;
