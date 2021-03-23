import React from "react";

class PhishAlbumCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    debugger;
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
    debugger;
    const date = document.querySelector('input[type="date"]');
    this.props.getPhishShow(date.value).then((payload) => {
      const show = payload.data;
      console.log(show);
      this.setState({
        title: show.date + " " + show.venue_name,
        year: show.date.split("-")[0],
        description: `Phish's ${this.ordinal_suffix_of(
          show.venue.shows_count
        )} show at ${show.venue.name} in ${show.venue.location}`,
        show_date: show.date,
        tracksArray: show.tracks,
      });
    });
    // .then(this.handleSubmit());
    debugger;
  }

  handleSubmit() {
    debugger;
    const formData = new FormData();
    formData.append("album[title]", this.state.title);
    formData.append("album[artist_id]", this.state.artist_id);
    formData.append("album[year]", this.state.year);
    formData.append("album[price]", this.state.price);
    formData.append("album[description]", this.state.description);
    formData.append("album[credits]", this.state.credits);
    // formData.append("album[genres]", this.state.genres);
    formData.append("album[photo]", this.state.photoFile);
    formData.append("album[show_date]", this.state.show_date);
    formData.append("tracks", JSON.stringify(this.state.tracksArray));
    this.props.createPhishAlbum(formData).then(
      () => this.redirectHome(),
      (err) => console.log(err)
    );
  }

  uploadImage() {
    document.getElementById("caf-add-photo-button").click();
  }

  render() {
    const uploadPreview = this.state.photoUrl ? (
      <img height="212px" width="212px" src={this.state.photoUrl} />
    ) : null;
    debugger;
    return (
      <div className="caf-outer">
        <div className="caf-inner">
          <div className="caf-box">
            <input
              type="date"
              max="2019-12-31"
              onChange={() => this.getShow()}
            />
            <div className="caf-upload-box">
              <div className="caf-upload" onClick={this.uploadImage}>
                {uploadPreview}
                <span
                  id="caf-upload-span"
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
            </div>

            <button onClick={() => this.handleSubmit()}>Add Phish Show</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PhishAlbumCreateForm;
