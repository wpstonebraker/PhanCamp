import React from "react";

class TrackEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track_name: props.track.trackName,
      track_id: props.track.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({
      track_name: this.props.track.trackName,
      track_id: this.props.track.id,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.track.trackName !== this.props.track.trackName) {
      this.setState({
        track_name: this.props.track.trackName,
        track_id: this.props.track.id,
      });
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit() {
    this.props.editTrack(this.state);
  }
  handleDelete() {
    this.props.deleteTrack(this.state.track_id);
  }

  render() {
    return (
      <div>
        <form>
          <span>{this.props.track.trackNum}</span>
          <input
            type="text"
            value={this.state.track_name}
            onChange={this.update("track_name")}
          />
          <button onClick={this.handleSubmit}>Save Track</button>
          <button onClick={this.handleDelete}>DeleteTrack</button>
        </form>
      </div>
    );
  }
}

export default TrackEdit;
