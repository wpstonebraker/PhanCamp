import React from "react";

class AlbumCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      artist: "",
      year: "",
      price: "",
      description: "",
      credit: "",
      photoUrl: null,
    };
  }

  render() {
    return (
      <div className="caf-outer">
        <div className="caf-inner">
          <div className="caf-box">
            <form className="caf">
              <div className="caf-left">
                <div className="top-spacer-left"></div>
                <div className="caf-album-preview-container">
                  <div className="caf-album-preview-box">
                    <div className="caf-preview-img-box"></div>
                    <div className="caf-preview-details">
                      <p>album name</p>
                      <li>
                        by <span className="bold">artist name</span>
                      </li>
                      <li className="grey-label">price</li>
                    </div>
                  </div>
                </div>

                <div className="caf-add-track-box">
                  <div>tracks placeholder</div>
                </div>
                <div>
                  <button>Create Album</button>
                </div>
              </div>
              {/* <input type="text" /> */}
              <div className="caf-right">
                <div className="top-spacer-right"></div>
                <div className="caf-title-box">
                  <input
                    type="text"
                    className="caf-title"
                    placeholder="album name"
                  />
                </div>
                <div className="caf-year-box">
                  <label htmlFor="caf-year">release year:</label>
                  <input
                    type="text"
                    className="caf-year"
                    placeholder="optional"
                  />
                  <span className="grey-label">yyyy</span>
                  &nbsp; &nbsp; &nbsp;
                  <span className="grey-label">
                    leave blank to use publish year
                  </span>
                </div>
                <div className="caf-price-box">
                  <label htmlFor="caf-price">pricing:</label>
                  <input type="text" className="caf-price" />
                  <p className="grey-label">enter zero or more</p>

                  <div>
                    <input
                      type="checkbox"
                      checked
                      className="caf-price-check"
                    />
                    <span className="caf-price-check-label">
                      let fans pay more if they want
                    </span>
                  </div>
                  <span className="caf-payments-email">
                    Payments will go to <b>EMAIL</b> via PayPal
                  </span>
                </div>
                <div className="caf-upload-box">
                  <div className="caf-upload"></div>
                </div>
                <div className="caf-artist-name-box flex-col caf-input">
                  <label htmlFor="caf-artist-name">artist:</label>
                  <input
                    type="text"
                    className="caf-artist-name"
                    placeholder="leave blank to use artist name"
                  />
                </div>
                <div className="caf-description-box flex-col caf-input">
                  <label htmlFor="caf-description">about this album:</label>
                  <textarea
                    className="caf-description"
                    placeholder="(optional)"
                  />
                </div>
                <div className="caf-credits-box flex-col caf-input">
                  <label htmlFor="caf-credits">album credits:</label>
                  <textarea className="caf-credits" placeholder="(optional)" />
                </div>
                <div className="caf-genres-box flex-col caf-input">
                  <label htmlFor="caf-genres">tags:</label>
                  <input
                    type="text"
                    className="caf-genres"
                    placeholder="comma-separated list of tags"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumCreateForm;
