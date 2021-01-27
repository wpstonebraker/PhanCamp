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
    const { phish, theGD, goose, ween } = this.props;

    return (
      <div className="fi-container">
        <div className="fi-box">
          <div
            className="fi-main"
            onClick={() => this.props.history.push(`/artists/${phish.id}`)}
          >
            <img src={window.featurePhish} alt="Main feature Phish" />
            <div className="fi-main-box">
              <span>
                Relive Night 13 of Phish's Legendary Madison Square Garden Run
              </span>
            </div>
          </div>
          <div className="fi-side">
            <div
              className="fis-item-container"
              onClick={() => this.props.history.push(`/artists/${ween.id}`)}
            >
              <img
                src={window.featureWeen}
                alt="Ween feature"
                className="fi-side-item"
              />
              <span className="fis-side-item-label">Ween</span>
            </div>
            <div
              className="fis-item-container"
              onClick={() => this.props.history.push(`/artists/${theGD.id}`)}
            >
              <img
                src={window.featureGD}
                alt="GD feature"
                className="fi-side-item"
              />
              <span className="fis-side-item-label">The Grateful Dead</span>
            </div>
            <div
              className="fis-item-container"
              onClick={() => this.props.history.push(`/artists/${goose.id}`)}
            >
              <img
                src={window.featureGoose}
                alt="Goose feature"
                className="fi-side-item"
              />
              <span className="fis-side-item-label">Goose</span>
            </div>
          </div>
          {/* <div className="fi-side-item-labels">
            <span id="fis-ween">Ween</span>
            <br />
            <span id="fis-gd">The Grateful Dead</span>
            <br />
            <span id="fis-goose">Goose</span>
          </div> */}
        </div>
      </div>
    );
  }
}

export default FeatureIndex;
