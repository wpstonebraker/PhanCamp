import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: this.props.user.artistName,
      email: this.props.user.email,
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
    formData.append("user[thumbnail]", this.state.thumbnailFile);
    formData.append("user[banner]", this.state.bannerFile);
    $.ajax({
      method: "PATCH",
      url: `/api/users/${id}`,
      data: formData,
      contentType: false,
      processData: false,
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
      <img height="212px" width="212px" src={this.state.bannerUrl} />
    ) : null;
    const thumbnailPreview = this.state.thumbnailUrl ? (
      <img height="212px" width="212px" src={this.state.thumbnailUrl} />
    ) : null;
    const { artistName, email } = this.state;
    return (
      <div className="caf-outer">
        <div className="caf-inner">
          <div id="profile-box">
            <form id="profile-form">
              <div className="profile-banner-upload-box">
                <div className="caf-upload" onClick={this.uploadBanner}>
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
              <div id="profile-label">
                Artist Profile for {this.props.user.artistName}
              </div>

              <div id="profile-email-box">
                <label htmlFor="profile-email">Email: </label>
                <input
                  type="text"
                  value={email}
                  onChange={this.update("email")}
                  id="profile-email"
                />
              </div>
              <div id="profile-artist-name-box">
                <label htmlFor="profile-artist-name">Artist Name: </label>
                <input
                  type="text"
                  value={artistName}
                  onChange={this.update("artistName")}
                  id="profile-artist-name"
                />
              </div>
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
              </div>
              <div>
                <input
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
