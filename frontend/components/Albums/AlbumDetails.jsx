import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import TrackItem from "./TrackItem";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import useToggle from "../../util/hooks/useToggle";

export default function AlbumDetails() {
  const [currentTrack, setCurrentTrack] = useState("");
  const [playing, setPlaying] = useToggle(false);

  const { id: albumId } = useParams();
  const { data: albumData, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(`/api/albums/${albumId}`);
      return response.json();
    },
    queryKey: `album${albumId}Data`,
  });

  useEffect(() => {
    if (albumData) {
      setCurrentTrack(albumData.tracks[0]);
    }
  }, [albumData]);

  const handlePlayTrack = (track) => {
    setCurrentTrack(track);
    setPlaying(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const album = albumData.albums;
  const tracks = albumData.tracks;
  const trackItems = tracks.map((track, i) => {
    return (
      <TrackItem
        track={track}
        key={i}
        onPlayTrack={handlePlayTrack}
        isPlaying={track === currentTrack && playing}
      />
    );
  });

  return (
    <div className="album-show-page-box">
      <div className="album-show-page-left">
        <div className="album-show-title-artist">
          <p id="album-show-title">{album.title}</p>
          <p id="album-show-artist">by: {album.artistName}</p>
          <div>
            <MusicPlayer
              // track={currentTrack}
              trackName={currentTrack.trackName}
              trackUrl={currentTrack.songUrl}
              playing={playing}
            />
          </div>
        </div>
        <div className="album-track-table-box">
          <table className="album-track-table">
            <tbody>{trackItems}</tbody>
          </table>
        </div>
        <div>
          <div className="album-show-description">
            <span>{album.description}</span>
          </div>
          <br />
          <div className="album-show-credits">
            <span>{album.credits}</span>
          </div>
        </div>
      </div>
      <div className="album-show-page-right">
        <div className="album-show-album-cover-box">
          <img src={album.photoUrl} alt="" className="album-show-album-cover" />
        </div>
      </div>
    </div>
  );
}
