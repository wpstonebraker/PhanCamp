import React from "react";
import EditAlbumContainer from "./edit_albums_container";

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
      genresArray: this.props.user.genreIds || [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleThumbnail = this.handleThumbnail.bind(this);
    this.handleBanner = this.handleBanner.bind(this);
    this.handleGenreClick = this.handleGenreClick.bind(this);
  }

  componentDidMount() {
    this.props.getAllAlbums();
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
    if (this.state.bannerUrl === null) {
      document
        .getElementById("profile-banner-error")
        .classList.remove("hidden");
    } else if (this.state.thumbnailUrl === null) {
      document
        .getElementById("profile-thumbnail-error")
        .classList.remove("hidden");
    } else if (this.state.genresArray.length === 0) {
      document
        .getElementById("profile-genres-error")
        .classList.remove("hidden");
    } else {
      const id = this.props.user.id;
      const formData = new FormData();
      formData.append("user[artist_name]", this.state.artistName);
      formData.append("user[email]", this.state.email);
      formData.append("user[location]", this.state.location);
      formData.append("user[about]", this.state.about);
      formData.append("user[personal_url]", this.state.personalUrl);

      formData.append("genres", this.state.genresArray);
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
      })
        .then((payload) => {
          this.props.receiveUserUpdate(payload);
        })
        .then(() => this.props.history.push(`/artists/${this.props.user.id}`));
      // .then(() => {
      //   this.props.history.push(`/artists/${this.props.user.id}`);
      // });
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
  }
  handleGenreClick(id) {
    const genreTag = document.getElementById(`genre-${id}`);
    genreTag.classList.toggle("selected-genre");
    if (this.state.genresArray.includes(id)) {
      this.state.genresArray.splice(this.state.genresArray.indexOf(id), 1);
    } else {
      this.state.genresArray.push(id);
    }
    console.log(this.state.genresArray);
  }

  render() {
    const bannerPreview = this.state.bannerUrl ? (
      <img height="100%" width="100%" src={this.state.bannerUrl} />
    ) : null;
    const thumbnailPreview = this.state.thumbnailUrl ? (
      <img height="212px" width="212px" src={this.state.thumbnailUrl} />
    ) : null;
    const { artistName, email, location, about, personalUrl } = this.state;
    const genreTabs = Object.values(this.props.genres).map((genre) => {
      return (
        <li
          className={`caf-genre-tab ${
            this.props.user.genreIds.includes(genre.id) ? "selected-genre" : ""
          }`}
          key={genre.id}
          id={`genre-${genre.id}`}
          onClick={() => this.handleGenreClick(genre.id)}
        >
          {genre.genre}
        </li>
      );
    });
    return (
      <div className="caf-outer">
        <div id="profile-box">
          <div className="caf-inner">
            <form id="profile-form">
              <div id="profile-label">
                <span>Artist Profile for {this.props.user.artistName}</span>
                <br />
                <span
                  className={
                    bannerPreview === null
                      ? ""
                      : thumbnailPreview === null
                      ? ""
                      : "hidden"
                  }
                >
                  Please Upload Banner and Thumbnail Images to Create an Album
                </span>
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
                    id="profile-banner-upload-span"
                    className={bannerPreview === null ? "" : "hidden"}
                  >
                    Upload Banner
                  </span>
                  <input
                    id="profile-banner-upload-button"
                    type="file"
                    className="profile-banner-upload-button"
                    hidden
                    onChange={this.handleBanner.bind(this)}
                  />
                </div>
                <p id="profile-banner-error" className="hidden">
                  please upload a banner image
                </p>
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
                    <p id="profile-thumbnail-error" className="hidden">
                      Please upload a thumbnail image
                    </p>
                  </div>
                </div>
                <div className="profile-genres flex-col caf-input">
                  select one or more genres:
                  <p id="profile-genres-error" className="hidden">
                    Please select at least one genre
                  </p>
                  <div className="caf-genre-tabs-box">{genreTabs}</div>
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
          <EditAlbumContainer />
        </div>
      </div>
    );
  }
}

export default Profile;
