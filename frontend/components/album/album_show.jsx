import React from "react";

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
  }

  render() {
    debugger;
    if (!this.props.album) return null;
    debugger;

    const { tracks, album, artist } = this.props;
    debugger;
    const trackItems = tracks.map((track) => {
      return <li>{track.trackName}</li>;
    });
    return (
      <div>
        <ol>{trackItems}</ol>
      </div>
    );
  }
}

export default AlbumShow;
