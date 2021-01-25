import React from "react";
import { Link } from "react-router-dom";

class FeatureIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  // const handleClick = () => {
  //   // const benchId = this.props.bench.id;
  //   // props.history.push(`/artists/${benchId}`);
  //   props.history.push(`/artists/45`);
  // };
  componentDidMount() {
    this.props.getFeatures();
  }

  render() {
    const { phish, theGD } = this.props;
    debugger;
    return (
      <div className="fi-container">
        <div className="fi-box">
          <div className="fi-main">
            <img src={window.featurePhish} alt="Main feature Phish" />
            <div className="fi-main-box">
              {/* <span onClick={handleClick}>Phishasdkljfg</span> */}
              <span
                onClick={() => this.props.history.push(`/artists/${phish.id}`)}
              >
                Relive Night 13 of Phish's Legendary Madison Square Garden Run
              </span>
            </div>
          </div>
          <div className="fi-side">
            <img
              src={window.featureWeen}
              alt="Ween feature"
              className="fi-side-item"
            />
            <img
              src={window.featureGD}
              alt="GD feature"
              className="fi-side-item"
              onClick={() => this.props.history.push(`/artists/${theGD.id}`)}
            />
            <img
              src={window.featureGoose}
              alt="Goose feature"
              className="fi-side-item"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureIndex;
