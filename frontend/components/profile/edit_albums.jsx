import React from "react";
import TrackEdit from "./edit_tracks";

class EditAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.handleClick = this.handleClick.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleAlbumSave = this.handleAlbumSave.bind(this);
    this.handleAlbumDelete = this.handleAlbumDelete.bind(this);
    this.handleDeleteTrack = this.handleDeleteTrack.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      Object.keys(prevProps.albums).length !==
      Object.keys(this.props.albums).length
    ) {
      console.log("hello");
    }
  }

  handleClick(album) {
    // const tracks = {};
    // album.trackIds.forEach((id) => {
    //   tracks[id] = this.props.tracks[id];
    // });
    this.setState({
      title: album.title,
      year: album.year,
      price: album.price,
      description: album.description,
      credits: album.credits,
      photoUrl: album.photoUrl,
      albumId: album.id,
      tracks: album.trackIds.map((id) => {
        return this.props.tracks[id];
      }),
    });
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
    document.getElementById("ep-ea-photo-button").click();
  }

  handleAlbumSave() {
    const formData = new FormData();
    formData.append("album[title]", this.state.title);
    // formData.append("album[artist_id]", this.state.artist_id);
    formData.append("album[year]", this.state.year);
    formData.append("album[price]", this.state.price);
    formData.append("album[description]", this.state.description);
    formData.append("album[credits]", this.state.credits);
    // formData.append("album[genres]", this.state.genres);
    if (this.state.photoFile !== null) {
      formData.append("album[photo]", this.state.photoFile);
    }

    $.ajax({
      method: "PATCH",
      url: `/api/albums/${this.state.albumId}`,
      data: formData,
      contentType: false,
      processData: false,
    }).then(() => {
      console.log("success");
    });
    // formData.append("genres", this.state.genresArray);
    // formData.append("tracks[count]", this.state.tracksArray.length);
  }

  handleAlbumDelete(id) {
    this.props.deleteAlbum(id);
  }

  handleDeleteTrack(id) {
    let tracks = this.state.tracks;
    let newTracks = [];
    tracks.forEach((track) => {
      if (track.id !== id) newTracks.push(track);
    });
    this.props.deleteTrack(id);
    this.setState({ tracks: newTracks });
  }

  render() {
    const { user, albums } = this.props;
    const {
      title,
      artist_id,
      year,
      price,
      description,
      credits,
      genres,
      tracks,
      albumId,
    } = this.state;
    if (user === undefined || Object.values(albums).length === 0) return null;
    if (user.albumIds.length === 0) {
      return <div>Artist has no Albums</div>;
    }
    const uploadPreview = this.state.photoUrl ? (
      <img height="212px" width="212px" src={this.state.photoUrl} />
    ) : null;
    const userAlbums = user.albumIds.map((id) => {
      const album = albums[id];
      return (
        <div key={album.id} onClick={() => this.handleClick(album)}>
          <img src={album.photoUrl} className="ep-ea-img" />
        </div>
      );
    });
    let albumTracks;
    if (tracks.length !== 0) {
      albumTracks = tracks
        .sort((a, b) => a - b)
        .map((track) => {
          return (
            <TrackEdit
              key={track.id}
              track={track}
              editTrack={this.props.editTrack}
              deleteTrack={this.handleDeleteTrack}
            />
          );
        });
    }
    return (
      <div id="ep-ea-container">
        <div id="ep-ea-album-box">
          <span>Select an Album</span>
          {userAlbums}
        </div>
        <div id="ep-ea-form-container">
          <form id="ep-ea-form">
            <div className="caf-upload-box">
              <span className={uploadPreview === null ? "hidden" : ""}>
                Click Image to Upload New Cover
              </span>
              <div className="caf-upload" onClick={this.uploadImage}>
                {uploadPreview}
                <span
                  id="caf-upload-span"
                  className={uploadPreview === null ? "" : "hidden"}
                >
                  Upload Album Art
                </span>
                <input
                  id="ep-ea-photo-button"
                  type="file"
                  className="caf-add-photo-button"
                  hidden
                  onChange={this.handlePhoto.bind(this)}
                />
              </div>
            </div>
            <div id="ep-ea-inputs">
              <div className="ep-ea-input-box">
                title:
                <input
                  type="text"
                  className="caf-title"
                  placeholder="album name"
                  value={title}
                  onChange={this.update("title")}
                />
              </div>
              <div className="ep-ea-input-box">
                release year:
                <input
                  type="text"
                  className="caf-year"
                  placeholder="optional"
                  value={year}
                  onChange={this.update("year")}
                />
              </div>
              <div className="ep-ea-input-box">
                pricing:
                <input
                  type="text"
                  className="caf-price"
                  value={price}
                  onChange={this.update("price")}
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
              <div>
                <button id="ep-ea-save-button" onClick={this.handleAlbumSave}>
                  Save Changes
                </button>
                <button
                  id="ep-ea-delete-button"
                  onClick={() => this.handleAlbumDelete(albumId)}
                  value={albumId}
                >
                  Delete Album
                </button>
              </div>
            </div>
          </form>
          <div>{albumTracks}</div>
        </div>
      </div>
    );
  }
}

export default EditAlbum;
