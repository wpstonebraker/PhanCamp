import React from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import AudioPlayer from "../audio_player/audio_player";
import PhishTrackItem from "../album/phish_track_item";
import TrackItem from "../album/track_item";

export default function AlbumDetails() {
  const { id: albumId } = useParams();
  const { data: albumData, isLoading } = useQuery({
    queryFn: async () => {
      console.log(albumId);
      const response = await fetch(`/api/albums/${albumId}`);
      return response.json();
    },
    queryKey: `album${albumId}Data`,
  });
  //   const loc = useLocation();
  console.log("album data = ", albumData);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const album = albumData.albums[albumId];
  const artistId = album.artistId;
  const artist = albumData.artist[artistId];
  const tracks = Object.values(albumData.tracks);
  const trackItems = tracks.map((track, i) => {
    return (
      <TrackItem
        track={track}
        // ref={this.audio}
        key={i}
        // handleTrack={this.handleTrack}
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
            <AudioPlayer
              id="album-audio-player"
              track={tracks[0]}
              // ref={this.audio}
              // track={track}
              // song={
              //   album.showDate !== undefined
              //     ? Object.values(tracks)[0].mp3
              //     : Object.values(tracks)[0].songUrl
              // }
            />
            {/* <audio controls id="audio-player">
          <source
            id="audio-player-source"
            src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1lCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--186d9de110146fa7c63638c22e6eb50ccc7de6cd/1997-11-17Tweezer.mp3"
            type="audio/mpeg"
          ></source>
        </audio> */}
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
