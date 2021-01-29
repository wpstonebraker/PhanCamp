import React from "react";
import SellingNowItem from "./selling_now_item";

class SellingNowIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.getAllAlbums();
  // }

  render() {
    if (!this.props.selling) return null;

    // const items = [];
    // while (items.length < 7) {
    //   ;
    //   items.push(
    //     this.props.albums[~~(Math.random() * this.props.albums.length)]
    //   );
    // }
    // ;

    // const newItems = items.map((album, i) => {
    //   return <SellingNowItem album={album} key={album.id + i} seconds={i} />;
    // });

    const items = this.props.selling.map((key, i) => {
      return (
        <SellingNowItem
          album={this.props.albums[key]}
          // key={this.props.albums[key].id}
          seconds={i}
        />
      );
    });
    // const newItems = [];
    // while (newItems.length < 8) {
    //   // let newItem = items[~~(Math.random() * this.props.albums.length) + 1];
    //   // if (!newItems.includes(newItem)) {
    //   //   newItems.push(items[~~(Math.random() * this.props.albums.length) + 1]);
    //   // } else {
    //   //   continue;
    //   // }
    //   newItems.push(items[~~(Math.random() * this.props.albums.length) + 1]);
    // }
    // const randMax = this.props.albums.length;
    // const randTimes =
    return (
      <div>
        <div className="factoid-outer">
          <div className="factoid-inner">
            <div className="factoid">
              Phans have streamed <span>6 million hours</span> of music using
              Phancamp,
              <br />
              and paid <span>$1.2 million</span> in the last week alone.
            </div>
          </div>
        </div>
        <div className="sn-idx-box-container">
          <span className="sn-idx-box-label">SELLING RIGHT NOW</span>
          <div className="sn-idx-box">{items}</div>
        </div>
      </div>
    );
  }
}

export default SellingNowIndex;
