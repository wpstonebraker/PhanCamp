import React from "react";

class AlbumCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;

    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
  }

  redirectHome() {
    this.props.history.push("/");
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handlePhoto(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoUrl: reader.result, photoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", imageFile: null });
    }
  }

  uploadImage() {
    document.getElementById("caf-add-photo-button").click();
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("album[title]", this.state.title);
    formData.append("album[artist_name]", this.state.artist_name);
    formData.append("album[year]", this.state.year);
    formData.append("album[price]", this.state.price);
    formData.append("album[description]", this.state.description);
    formData.append("album[credits]", this.state.credits);
    // formData.append("album[genres]", this.state.genres);
    formData.append("album[photo]", this.state.photoFile);
    this.props.createAlbum(formData).then(this.redirectHome());
    // this.redirectHome();
  }

  render() {
    const {
      title,
      artist_name,
      year,
      price,
      description,
      credits,
      genres,
    } = this.props;
    const photoPreview = this.state.photoUrl ? (
      <img height="72px" width="72px" src={this.state.photoUrl} />
    ) : null;
    const uploadPreview = this.state.photoUrl ? (
      <img height="212px" width="212px" src={this.state.photoUrl} />
    ) : null;

    return (
      <div className="caf-outer">
        <div className="caf-inner">
          <div className="caf-box">
            <form className="caf" onSubmit={this.handleSubmit}>
              <div className="caf-left">
                <div className="top-spacer-left"></div>
                <div className="caf-album-preview-container">
                  <div className="caf-album-preview-box">
                    <div className="caf-preview-img-box">{photoPreview}</div>
                    <div className="caf-preview-details">
                      <p>{this.state.title}&nbsp;</p>
                      <li>
                        by{" "}
                        <span className="bold">{this.state.artist_name}</span>
                      </li>
                      <li className="grey-label">${this.state.price}</li>
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
                    value={title}
                    onChange={this.update("title")}
                  />
                </div>
                <div className="caf-year-box">
                  <label htmlFor="caf-year">release year:</label>
                  <input
                    type="text"
                    className="caf-year"
                    placeholder="optional"
                    value={year}
                    onChange={this.update("year")}
                  />
                  <span className="grey-label">yyyy</span>
                  &nbsp; &nbsp; &nbsp;
                  <span className="grey-label">
                    leave blank to use publish year
                  </span>
                </div>
                <div className="caf-price-box">
                  <label htmlFor="caf-price">pricing:</label>
                  <input
                    type="text"
                    className="caf-price"
                    value={price}
                    onChange={this.update("price")}
                  />
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
                    Payments will go to{" "}
                    <b className="bold">{this.props.currentUser.email}</b> via
                    PayPal
                  </span>
                </div>
                <div className="caf-upload-box">
                  <div className="caf-upload" onClick={this.uploadImage}>
                    {uploadPreview}
                    <input
                      id="caf-add-photo-button"
                      type="file"
                      className="caf-add-photo-button"
                      hidden
                      onChange={this.handlePhoto.bind(this)}
                    />
                  </div>
                </div>
                <div className="caf-artist-name-box flex-col caf-input">
                  <label htmlFor="caf-artist-name">artist:</label>
                  <input
                    type="text"
                    className="caf-artist-name"
                    placeholder="leave blank to use artist name"
                    value={artist_name}
                    onChange={this.update("artist_name")}
                  />
                </div>
                <div className="caf-description-box flex-col caf-input">
                  <label htmlFor="caf-description">about this album:</label>
                  <textarea
                    className="caf-description"
                    placeholder="(optional)"
                    value={description}
                    onChange={this.update("description")}
                  />
                </div>
                <div className="caf-credits-box flex-col caf-input">
                  <label htmlFor="caf-credits">album credits:</label>
                  <textarea
                    className="caf-credits"
                    placeholder="(optional)"
                    value={credits}
                    onChange={this.update("credits")}
                  />
                </div>
                <div className="caf-genres-box flex-col caf-input">
                  <label htmlFor="caf-genres">tags:</label>
                  <input
                    type="text"
                    className="caf-genres"
                    placeholder="comma-separated list of tags"
                    value={genres}
                    onChange={this.update("genres")}
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
