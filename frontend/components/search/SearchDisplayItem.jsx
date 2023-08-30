import React from "react";
import ArtistSearchItem from "./SearchItems/ArtistSearchItem";
import AlbumSearchItem from "./SearchItems/AlbumSearchItem";
import TrackSearchItem from "./SearchItems/TrackSearchItem";

function SearchDisplayItem({ details }) {
  let display;
  switch (details.class) {
    case "artist":
      display = <ArtistSearchItem details={details} />;
      break;
    case "album":
      display = <AlbumSearchItem details={details} />;
      break;
    case "track":
      display = <TrackSearchItem details={details} />;
      break;
    default:
      break;
  }

  return <div>{display}</div>;
}
//   return (
//     <>
//       <div className="display-tile">
//         <div className="dt-image">
//           <img src={details.photoUrl} />
//         </div>
//       </div>
//     </>
//   );
//   ;
//   let item = details;
//   let display;
//   switch (item.class) {
//     case "user":
//       item.name = item.artistName;
//       item.image = item.thumbnailUrl;
//       display = (
//         <div className="display-tile">
//           <div
//             className="dt-image"
//             onClick={() => this.props.history.push(`/artists/${item.id}`)}
//           >
//             <img src={item.image} />
//           </div>
//           <div className="dt-details">
//             <li className="dt-details-class">ARTIST</li>
//             <li
//               className="dt-details-name pointer"
//               onClick={() => this.props.history.push(`/artists/${item.id}`)}
//             >
//               {item.name}
//             </li>
//             <li className="dt-details-location">{item.location}</li>
//             <li className="dt-details-website">{item.personalUrl}</li>
//           </div>
//         </div>
//       );
//       break;
//     case "album":
//       item.name = item.title;
//       item.image = item.photoUrl;
//       display = (
//         <div className="display-tile">
//           <div
//             className="dt-image"
//             onClick={() =>
//               this.props.history.push(
//                 `/artists/${item.artistId}/albums/${item.id}`
//               )
//             }
//           >
//             <img src={item.image} />
//           </div>
//           <div className="dt-details">
//             <li className="dt-details-class">ALBUM</li>
//             <li
//               className="dt-details-name pointer"
//               onClick={() =>
//                 this.props.history.push(
//                   `/artists/${item.artistId}/albums/${item.id}`
//                 )
//               }
//             >
//               {item.name}
//             </li>
//             <li
//               className="dt-details-location pointer"
//               onClick={() =>
//                 this.props.history.push(`/artists/${item.artistId}`)
//               }
//             >
//               by {this.props.artists[item.artistId].artistName}
//             </li>
//             {/* <li className="dt-details-website">{item.personalUrl}</li> */}
//           </div>
//         </div>
//       );
//       break;

//     case "track":
//       item.name = item.title;
//       let artist = this.props.artists[this.props.albums[item.albumId].artistId];

//       display = (
//         <div className="display-tile">
//           <div
//             className="dt-image"
//             onClick={() =>
//               this.props.history.push(
//                 `/artists/${artist.id}/albums/${item.albumId}`
//               )
//             }
//           >
//             <img src={this.props.albums[item.albumId].photoUrl} />
//           </div>
//           <div className="dt-details">
//             <li className="dt-details-class">TRACK</li>
//             <li
//               className="dt-details-name"
//               onClick={() =>
//                 this.props.history.push(
//                   `/artists/${artist.id}/albums/${item.albumId}`
//                 )
//               }
//             >
//               {item.trackName}
//             </li>
//             <li
//               className="dt-details-location pointer"
//               onClick={() =>
//                 this.props.history.push(
//                   `/artists/${artist.id}/albums/${item.albumId}`
//                 )
//               }
//             >
//               <span
//                 onClick={() =>
//                   this.props.history.push(
//                     `/artists/${artist.id}/albums/${item.albumId}`
//                   )
//                 }
//               >
//                 from {this.props.albums[item.albumId].title}
//               </span>{" "}
//             </li>
//             <li className="dt-details-location">
//               by
//               <span
//                 className="pointer"
//                 onClick={() => this.props.history.push(`/artists/${artist.id}`)}
//               >
//                 {` `}
//                 {artist.artistName}
//               </span>
//             </li>
//             {/* <li className="dt-details-website">{item.personalUrl}</li> */}
//           </div>
//         </div>
//       );
//     default:
//       break;
//   }
//   return <div>{display}</div>;
//   return (
//     <>
//       <div></div>
//     </>
//   );
// }

// class DisplayItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   ;

//   render() {
//     let item = this.props.details;
//     let display;
//     switch (item.class) {
//       case "user":
//         item.name = item.artistName;
//         item.image = item.thumbnailUrl;
//         display = (
//           <div className="display-tile">
//             <div
//               className="dt-image"
//               onClick={() => this.props.history.push(`/artists/${item.id}`)}
//             >
//               <img src={item.image} />
//             </div>
//             <div className="dt-details">
//               <li className="dt-details-class">ARTIST</li>
//               <li
//                 className="dt-details-name pointer"
//                 onClick={() => this.props.history.push(`/artists/${item.id}`)}
//               >
//                 {item.name}
//               </li>
//               <li className="dt-details-location">{item.location}</li>
//               <li className="dt-details-website">{item.personalUrl}</li>
//             </div>
//           </div>
//         );
//         break;
//       case "album":
//         item.name = item.title;
//         item.image = item.photoUrl;
//         display = (
//           <div className="display-tile">
//             <div
//               className="dt-image"
//               onClick={() =>
//                 this.props.history.push(
//                   `/artists/${item.artistId}/albums/${item.id}`
//                 )
//               }
//             >
//               <img src={item.image} />
//             </div>
//             <div className="dt-details">
//               <li className="dt-details-class">ALBUM</li>
//               <li
//                 className="dt-details-name pointer"
//                 onClick={() =>
//                   this.props.history.push(
//                     `/artists/${item.artistId}/albums/${item.id}`
//                   )
//                 }
//               >
//                 {item.name}
//               </li>
//               <li
//                 className="dt-details-location pointer"
//                 onClick={() =>
//                   this.props.history.push(`/artists/${item.artistId}`)
//                 }
//               >
//                 by {this.props.artists[item.artistId].artistName}
//               </li>
//               {/* <li className="dt-details-website">{item.personalUrl}</li> */}
//             </div>
//           </div>
//         );
//         break;

//       case "track":
//         item.name = item.title;
//         let artist =
//           this.props.artists[this.props.albums[item.albumId].artistId];

//         display = (
//           <div className="display-tile">
//             <div
//               className="dt-image"
//               onClick={() =>
//                 this.props.history.push(
//                   `/artists/${artist.id}/albums/${item.albumId}`
//                 )
//               }
//             >
//               <img src={this.props.albums[item.albumId].photoUrl} />
//             </div>
//             <div className="dt-details">
//               <li className="dt-details-class">TRACK</li>
//               <li
//                 className="dt-details-name"
//                 onClick={() =>
//                   this.props.history.push(
//                     `/artists/${artist.id}/albums/${item.albumId}`
//                   )
//                 }
//               >
//                 {item.trackName}
//               </li>
//               <li
//                 className="dt-details-location pointer"
//                 onClick={() =>
//                   this.props.history.push(
//                     `/artists/${artist.id}/albums/${item.albumId}`
//                   )
//                 }
//               >
//                 <span
//                   onClick={() =>
//                     this.props.history.push(
//                       `/artists/${artist.id}/albums/${item.albumId}`
//                     )
//                   }
//                 >
//                   from {this.props.albums[item.albumId].title}
//                 </span>{" "}
//               </li>
//               <li className="dt-details-location">
//                 by
//                 <span
//                   className="pointer"
//                   onClick={() =>
//                     this.props.history.push(`/artists/${artist.id}`)
//                   }
//                 >
//                   {` `}
//                   {artist.artistName}
//                 </span>
//               </li>
//               {/* <li className="dt-details-website">{item.personalUrl}</li> */}
//             </div>
//           </div>
//         );
//       default:
//         break;
//     }
//     return <div>{display}</div>;
//   }
// }

export default SearchDisplayItem;
