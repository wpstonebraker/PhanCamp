import React from "react";

class TrackEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track_name: props.track.trackName,
      track_id: props.track.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    debugger;

    this.setState({
      track_name: this.props.track.trackName,
      track_id: this.props.track.id,
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit() {
    debugger;
    this.props.editTrack(this.state);
  }

  render() {
    debugger;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.track_name}
            onChange={this.update("track_name")}
          />
          <button>Save Track</button>
        </form>
      </div>
    );
  }
}

export default TrackEdit;
