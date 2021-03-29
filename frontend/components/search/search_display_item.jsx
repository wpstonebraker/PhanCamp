import React from "react";

const DisplayItem = (props) => {
  debugger;
  let item = props.details;
  switch (item.class) {
    case "user":
      item.name = item.artistName;
      item.image = item.thumbnailUrl;
      break;
    case "album":
      item.name = item.title;
      item.image = item.photoUrl;
      break;

    case "track":
      item.name = item.title;
    default:
      break;
  }
  debugger;
  return (
    <li className="display-tile">
      {item.name}
      <img src={item.image} />
    </li>
  );
};

export default DisplayItem;
