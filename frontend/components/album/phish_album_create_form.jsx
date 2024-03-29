import React from "react";

class PhishAlbumCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.dateRef = React.createRef();
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
  }

  // componentDidMount() {
  //   this.getRandomShow();
  // }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  redirectHome() {
    this.props.history.push(`/`);
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

  ordinal_suffix_of(i) {
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  }

  getShow() {
    const date = document.querySelector('input[type="date"]');
    $.ajax({
      url: `http://phish.in/api/v1/shows/${date.value}`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${window.phishAPIKey}`,
      },
    }).then(
      (payload) => {
        document.getElementById("phish-caf-date-error").classList.add("hidden");
        const show = payload.data;
        console.log(show);
        this.setState({
          title: show.date + " " + show.venue_name,
          year: show.date.split("-")[0],
          description: `Phish's ${this.ordinal_suffix_of(
            show.venue.shows_count
          )} appearance at ${show.venue.name} in ${show.venue.location}`,
          showDate: show.date,
          tracksArray: show.tracks,
        });
      },
      (err) =>
        err.statusText === "error"
          ? document
              .getElementById("phish-caf-date-error")
              .classList.remove("hidden")
          : null
    );
    // .then(this.handleSubmit());
  }

  getRandomShow() {
    $.ajax({
      url: `http://phish.in/api/v1/random-show`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${window.phishAPIKey}`,
      },
    }).then((payload) => {
      document.getElementById("phish-caf-date-error").classList.add("hidden");
      const show = payload.data;
      console.log(show);
      this.setState({
        title: show.date + " " + show.venue_name,
        year: show.date.split("-")[0],
        description: `Phish's ${this.ordinal_suffix_of(
          show.venue.shows_count
        )} appearance at ${show.venue.name} in ${show.venue.location}`,
        showDate: show.date,
        tracksArray: show.tracks,
      });
    });
  }

  handleSubmit() {
    if (this.state.photoUrl === null) {
      document.getElementById("phish-caf-art-error").classList.remove("hidden");
    } else {
      document.getElementById("phish-caf-art-error").classList.add("hidden");
      const formData = new FormData();
      formData.append("album[title]", this.state.title);
      formData.append("album[artist_id]", this.state.artist_id);
      formData.append("album[year]", this.state.year);
      formData.append("album[price]", this.state.price);
      formData.append("album[description]", this.state.description);
      formData.append("album[credits]", this.state.credits);
      // formData.append("album[genres]", this.state.genres);
      formData.append("album[photo]", this.state.photoFile);
      formData.append("album[show_date]", this.state.showDate);
      formData.append("tracks", JSON.stringify(this.state.tracksArray));
      this.props.createPhishAlbum(formData).then(
        () => this.redirectHome(),
        (err) => console.log(err)
      );
    }
  }

  uploadImage() {
    document.getElementById("caf-add-photo-button").click();
  }

  // handleGenreClick(id) {
  //   const genreTag = document.getElementById(`genre-${id}`);
  //   genreTag.classList.toggle("selected-genre");
  //   if (this.state.genresArray.includes(id)) {
  //     this.state.genresArray.splice(this.state.genresArray.indexOf(id), 1);
  //   } else {
  //     this.state.genresArray.push(id);
  //   }
  //   console.log(this.state.genresArray);
  // }

  renderTracks() {
    return this.state.tracksArray.map((track, i) => {
      return (
        <li key={track.id}>
          {`${i + 1}`} {track.title}
        </li>
      );
    });
  }

  render() {
    const tracksPreview =
      this.state.tracksArray.length > 0 ? this.renderTracks() : null;
    const uploadPreview = this.state.photoUrl ? (
      <img height="212px" width="212px" src={this.state.photoUrl} />
    ) : null;
    // const genreTabs = Object.values(this.props.genres).map((genre) => {
    //   return (
    //     <li
    //       className="caf-genre-tab"
    //       key={genre.id}
    //       id={`genre-${genre.id}`}
    //       onClick={() => this.handleGenreClick(genre.id)}
    //     >
    //       {genre.genre}
    //     </li>
    //   );
    // });
    return (
      <div id="phish-caf-outer">
        <div id="phish-caf-inner">
          <div id="phish-caf-box">
            <div id="phish-credits-box">
              <p id="phish-caf-credits-label">
                Add any Phish concert, brought to you by:
              </p>
              <div>
                <a href="https://phish.in" target="_blank">
                  <img src={window.phishinLogo} alt="" />
                </a>
              </div>
            </div>
            <div id="phish-caf-form">
              <div id="phish-caf-form-left">
                <div id="phish-caf-date-box">
                  <p>Select a date OR a random show</p>
                  <div id="phish-caf-date-box-inner">
                    <input
                      type="date"
                      min="1983-12-02"
                      max="2023-12-31"
                      onChange={() => this.getShow()}
                    />
                    {/* <p>{this.state.showDate}</p> */}
                    <p
                      id="phish-caf-date-error"
                      className="hidden"
                      ref={this.dateRef}
                    >
                      please select a date with a Phish concert
                    </p>
                    <button
                      id="random-show-button"
                      onClick={() => this.getRandomShow()}
                    >
                      Random Show
                    </button>
                  </div>
                </div>
                <div id="phish-caf-upload-box">
                  <div id="phish-caf-upload" onClick={this.uploadImage}>
                    {uploadPreview}
                    <span
                      id="phish-caf-upload-span"
                      className={uploadPreview === null ? "" : "hidden"}
                    >
                      Upload Album Art
                    </span>
                    <input
                      id="caf-add-photo-button"
                      type="file"
                      className="caf-add-photo-button"
                      hidden
                      onChange={this.handlePhoto.bind(this)}
                    />
                  </div>
                  <p id="phish-caf-art-error" className="hidden">
                    please upload an album cover
                  </p>
                  {/* <div>{genreTabs}</div> */}
                </div>
              </div>
              <div id="phish-caf-form-right">
                <div id="phish-caf-display">
                  <div id="phish-caf-display-date-box">
                    <p id="phish-caf-date-label">Date:</p>
                    <p id="phish-caf-date">{this.state.showDate}</p>
                  </div>
                  <div>
                    <p id="phish-caf-display-tracks-label">Tracks:</p>
                    <ul id="phish-caf-display-tracks">{tracksPreview}</ul>
                  </div>
                </div>
              </div>
            </div>
            <button
              id="add-phish-show-button"
              onClick={() => this.handleSubmit()}
            >
              Add Phish Show
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PhishAlbumCreateForm;
