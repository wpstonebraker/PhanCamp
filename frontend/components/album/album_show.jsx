import React from "react";

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    debugger;
    if (!this.props.album) return null;

    const { tracks, album, artist } = this.props;
    const trackItems = tracks.map((track) => {
      return <li>{track.track_name}</li>;
    });
    return (
      <div>
        <ol>{trackItems}</ol>
      </div>
    );
  }
}

export default AlbumShow;
