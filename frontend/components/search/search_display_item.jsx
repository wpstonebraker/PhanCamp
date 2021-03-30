import React from "react";

class DisplayItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.details;
    let display;
    debugger;
    switch (item.class) {
      case "user":
        item.name = item.artistName;
        item.image = item.thumbnailUrl;
        display = (
          <div className="display-tile">
            <div
              className="dt-image"
              onClick={() => this.props.history.push(`/artists/${item.id}`)}
            >
              <img src={item.image} />
            </div>
            <div className="dt-details">
              <li className="dt-details-class">ARTIST</li>
              <li
                className="dt-details-name"
                onClick={() => this.props.history.push(`/artists/${item.id}`)}
              >
                {item.name}
              </li>
              <li className="dt-details-location">{item.location}</li>
              <li className="dt-details-website">{item.personalUrl}</li>
            </div>
          </div>
        );
        break;
      case "album":
        item.name = item.title;
        item.image = item.photoUrl;
        display = (
          <div className="display-tile">
            <div
              className="dt-image"
              onClick={() =>
                this.props.history.push(
                  `/artists/${item.artistId}/albums/${item.id}`
                )
              }
            >
              <img src={item.image} />
            </div>
            <div className="dt-details">
              <li className="dt-details-class">ALBUM</li>
              <li className="dt-details-name">{item.name}</li>
              <li className="dt-details-location">
                by {this.props.artists[item.artistId].artistName}
              </li>
              {/* <li className="dt-details-website">{item.personalUrl}</li> */}
            </div>
          </div>
        );
        break;

      case "track":
        debugger;
        item.name = item.title;
        let artist = this.props.artists[
          this.props.albums[item.albumId].artistId
        ];

        display = (
          <div className="display-tile">
            <div
              className="dt-image"
              onClick={() =>
                this.props.history.push(
                  `/artists/${artist.id}/albums/${item.albumId}`
                )
              }
            >
              <img src={this.props.albums[item.albumId].photoUrl} />
            </div>
            <div className="dt-details">
              <li className="dt-details-class">TRACK</li>
              <li className="dt-details-name">{item.trackName}</li>
              <li className="dt-details-location">
                from {this.props.albums[item.albumId].title} by{" "}
                {artist.artistName}
              </li>
              {/* <li className="dt-details-website">{item.personalUrl}</li> */}
            </div>
          </div>
        );
      default:
        break;
    }
    debugger;
    return <div>{display}</div>;
  }
}

export default DisplayItem;
