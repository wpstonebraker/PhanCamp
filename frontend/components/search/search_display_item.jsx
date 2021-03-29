import React from "react";

const DisplayItem = (props) => {
  debugger;
  let item = props.details;
  let display;
  switch (item.class) {
    case "user":
      item.name = item.artistName;
      item.image = item.thumbnailUrl;
      display = (
        <li className="display-tile">
          <div
            className="dt-image"
            onClick={() => props.history.push(`/artists/${item.id}`)}
          >
            <img src={item.image} />
          </div>
          <div className="dt-details">
            <ul>
              <li>ARTIST</li>
              <li>{item.name}</li>
              <li>{item.location}</li>
              <li>{item.personalUrl}</li>
            </ul>
          </div>
        </li>
      );
      break;
    case "album":
      item.name = item.title;
      item.image = item.photoUrl;
      display = (
        <li className="display-tile">
          <div
            className="dt-image"
            onClick={() => props.history.push(`/albums/${item.id}`)}
          >
            <img src={item.image} />
          </div>
          <div>
            <ul>
              <li>{item.name}</li>
              <li>{item.name}</li>
            </ul>
          </div>
        </li>
      );
      break;

    case "track":
      item.name = item.title;
    default:
      break;
  }
  debugger;
  return <div>{display}</div>;
};

export default DisplayItem;
