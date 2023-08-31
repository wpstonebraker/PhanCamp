import React, { useState, useEffect } from "react";
import MusicPlayer from "../../MusicPlayer/MusicPlayer";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import useToggle from "../../../util/hooks/useToggle";

const MusicPlayerBox = styled.div`
  height: 370px;
`;

function Discover({ albums, genres }) {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [discoverAlbums, setDiscoverAlbums] = useState(albums);
  const [currentTrack, setCurrentTrack] = useState(albums[0].firstTrack);
  const [playing, setPlaying] = useToggle(false);

  const navigate = useNavigate();

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setCurrentTrack(album.firstTrack);
    setPlaying(true);
  };

  const handleTabClick = (genreId) => {
    setDiscoverAlbums(filterAlbums(albums, genreId));
  };

  const genreTabs = initGenreTabs(genres, handleTabClick);

  const albumTiles = initAlbumTiles(discoverAlbums, handleAlbumClick);

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
        <div id="discover-player-container">
          <div id="discover-player-box">
            <div>
              <img
                src={selectedAlbum.photoUrl}
                className="dat-selected-art"
                alt=""
              />
            </div>
            <MusicPlayerBox>
              <div id="discover-music-player">
                <MusicPlayer
                  trackName={currentTrack.trackName}
                  trackUrl={currentTrack.songUrl}
                  playing={playing}
                />
              </div>
              &nbsp; from the album{" "}
              <span
                id="discover-selected-album"
                onClick={() =>
                  navigate(
                    `/artists/${selectedAlbum.artistId}/albums/${selectedAlbum.id}`
                  )
                }
              >
                {selectedAlbum.title}
              </span>
            </MusicPlayerBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;

function filterAlbums(albums, genreId) {
  return albums.filter((album) => {
    return album.genreIds.includes(genreId);
  });
}

function initGenreTabs(genres, handleTabClick) {
  return genres.map((genre) => (
    <li
      key={genre.id}
      className="discover-genre-tab"
      onClick={() => handleTabClick(genre.id)}
    >
      {genre.genre}
    </li>
  ));
}

function initAlbumTiles(albums, handleAlbumClick) {
  return albums.slice(0, 8).map((album, i) => (
    <div
      key={album.id}
      id={`discover-album-tile-${i}`}
      className="discover-album-tile"
    >
      <img
        src={album.photoUrl}
        alt=""
        className="discover-album-tile-photo"
        onClick={() => handleAlbumClick(album)}
      />

      <li
        className="dat-album-link"
        onClick={() =>
          navigate(`/artists/${album.artistId}/albums/${album.id}`)
        }
      >
        {album.title}
      </li>
      <li
        className="dat-artist-link"
        onClick={() => navigate(`/artists/${album.artistId}`)}
      >
        {album.artist}
      </li>
    </div>
  ));
}
