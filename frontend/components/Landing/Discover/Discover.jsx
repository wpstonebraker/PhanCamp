import React, { useState, useEffect } from "react";
import MusicPlayer from "../../MusicPlayer/MusicPlayer";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

function Discover({ albums, genres }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [discoverAlbums, setDiscoverAlbums] = useState([]);

  const handleAlbumClick = (albumId) => {
    // Your album click logic
    // ...
  };

  const handleTabClick = (genreId) => {
    const discoverAlbums = Object.values(props.albums).filter((album) => {
      return album.genreIds.includes(genreId);
    });
    setDiscoverAlbums(discoverAlbums);
  };

  useEffect(() => {
    // ComponentDidMount logic
    // ...
    return () => {
      // ComponentWillUnmount logic
      // ...
    };
  }, []);

  const genreTabs = genres.map((genre) => (
    <li
      key={genre.id}
      className="discover-genre-tab"
      onClick={() => handleTabClick(genre.id)}
    >
      {genre.genre}
    </li>
  ));

  console.log(albums);
  const albumTiles = albums.slice(0, 8).map((album, i) => (
    <div
      key={album.id}
      id={`discover-album-tile-${i}`}
      className="discover-album-tile"
    >
      <img
        src={album.photoUrl}
        alt=""
        className="discover-album-tile-photo"
        onClick={() => this.handleAlbumClick(album.id)}
      />

      <li
        className="dat-album-link"
        onClick={() =>
          this.props.history.push(
            `/artists/${album.artistId}/albums/${album.id}`
          )
        }
      >
        {album.title}
      </li>
      <li
        className="dat-artist-link"
        onClick={() => this.props.history.push(`/artists/${album.artistId}`)}
      >
        {album.artistName}
      </li>
    </div>
  ));

  return (
    <div id="discover-outer">
      <div id="discover-label-box">
        <div id="discover-label">Discover</div>
      </div>
      <div id="discover-genre-container">
        <div id="discover-genre-box">
          <div id="genre-line-1-box">
            <div id="genre-line-1">{genreTabs}</div>
          </div>
          <div id="genre-line-2"></div>
          <div id="genre-line-3"></div>
        </div>
      </div>
      <div id="discover-albums-container">
        <div id="discover-albums-box">{albumTiles}</div>
        {/* <MusicPlayer /> */}
      </div>
    </div>
  );
}

export default Discover;
