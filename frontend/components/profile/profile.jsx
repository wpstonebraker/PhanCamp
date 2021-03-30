import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: this.props.user.artistName,
      email: this.props.user.email,
      location: this.props.user.location,
      about: this.props.user.about,
      personalUrl: this.props.user.personalUrl,
      thumbnailFile: null,
      thumbnailUrl: this.props.user.thumbnailUrl || null,
      bannerFile: null,
      bannerUrl: this.props.user.bannerUrl || null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleThumbnail = this.handleThumbnail.bind(this);
    this.handleBanner = this.handleBanner.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleThumbnail(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ thumbnailUrl: reader.result, thumbnailFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ thumbnailUrl: "", thumbnailFile: null });
    }
  }

  handleBanner(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ bannerUrl: reader.result, bannerFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ bannerUrl: "", bannerFile: null });
    }
  }

  uploadThumbnail() {
    document.getElementById("profile-thumbnail-upload-button").click();
  }
  uploadBanner() {
    document.getElementById("profile-banner-upload-button").click();
  }

  handleSubmit() {
    // e.preventDefault();

    const id = this.props.user.id;
    const formData = new FormData();
    formData.append("user[artist_name]", this.state.artistName);
    formData.append("user[email]", this.state.email);
    if (this.state.bannerFile !== null) {
      formData.append("user[banner]", this.state.bannerFile);
    }
    if (this.state.thumbnailFile !== null) {
      formData.append("user[thumbnail]", this.state.thumbnailFile);
    }
    $.ajax({
      method: "PATCH",
      url: `/api/users/${id}`,
      data: formData,
      contentType: false,
      processData: false,
    }).then(() => {
      this.props.history.push(`/artists/${this.props.user.id}`);
    });
    // export const updateProfile = (id, formData) => {
    //       return $.ajax({
    //         method: "PATCH",
    //         url: `/api/users/${id}`,
    //         data: formData,
    //         contentType: false,
    //         processData: false,
    //       });
    //     };
  }

  render() {
    const bannerPreview = this.state.bannerUrl ? (
      <img height="212px" width="100%" src={this.state.bannerUrl} />
    ) : null;
    const thumbnailPreview = this.state.thumbnailUrl ? (
      <img height="212px" width="212px" src={this.state.thumbnailUrl} />
    ) : null;
    const { artistName, email, location, about, personalUrl } = this.state;
    return (
      <div className="caf-outer">
        <div id="profile-box">
          <div className="caf-inner">
            <form id="profile-form">
              <div id="profile-label">
                Artist Profile for {this.props.user.artistName}
              </div>
              <div className="profile-banner-upload-box">
                <span id="" className={bannerPreview === null ? "hidden" : ""}>
                  Click Banner Image to Upload New Image
                </span>
                <div
                  className="profile-banner-upload"
                  onClick={this.uploadBanner}
                >
                  {bannerPreview}
                  <span
                    id="caf-upload-span"
                    className={bannerPreview === null ? "" : "hidden"}
                  >
                    Upload Banner
                  </span>
                  <input
                    id="profile-banner-upload-button"
                    type="file"
                    className="profile-Banner-upload-button"
                    hidden
                    onChange={this.handleBanner.bind(this)}
                  />
                </div>
              </div>
              <div id="profile-bottom">
                <div id="profile-bottom-left">
                  <div id="profile-email-box">
                    <label htmlFor="profile-email">Email: </label>
                    <br />
                    <input
                      type="text"
                      value={email}
                      onChange={this.update("email")}
                      id="profile-email"
                    />
                  </div>
                  <div id="profile-artist-name-box">
                    <label htmlFor="profile-artist-name">Artist Name: </label>
                    <br />
                    <input
                      type="text"
                      value={artistName}
                      onChange={this.update("artistName")}
                      id="profile-artist-name"
                    />
                  </div>
                  <div id="profile-location-box">
                    <label htmlFor="location-name">Location: </label>
                    <br />
                    <input
                      type="text"
                      value={location}
                      onChange={this.update("location")}
                      id="profile-location"
                    />
                  </div>
                  <div id="profile-about-box">
                    <label htmlFor="about-name">About: </label>
                    <br />
                    <textarea
                      value={about}
                      onChange={this.update("about")}
                      id="profile-about"
                    />
                  </div>
                  <div id="profile-personalUrl-box">
                    <label htmlFor="personalUrl-name">Personal Url: </label>
                    <br />
                    <input
                      type="text"
                      value={personalUrl}
                      onChange={this.update("personalUrl")}
                      id="profile-personalUrl"
                    />
                  </div>
                </div>
                <div id="profile-bottom-right">
                  <div className="profile-thumbnail-upload-box">
                    <div className="caf-upload" onClick={this.uploadThumbnail}>
                      {thumbnailPreview}
                      <span
                        id="caf-upload-span"
                        className={thumbnailPreview === null ? "" : "hidden"}
                      >
                        Upload Thumbnail
                      </span>
                      <input
                        id="profile-thumbnail-upload-button"
                        type="file"
                        className="profile-thumbnail-upload-button"
                        hidden
                        onChange={this.handleThumbnail.bind(this)}
                      />
                    </div>
                    <span
                      id=""
                      className={thumbnailPreview === null ? "hidden" : ""}
                    >
                      Click Thumbnail to Upload New Image
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <input
                  id="profile-submit"
                  type="submit"
                  value="Update Profile"
                  onClick={this.handleSubmit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
