import { useState } from "react";
import useToggle from "./useToggle";

export default function useMusicPlayer(initialTrack = "") {
  const [currentTrack, setCurrentTrack] = useState(initialTrack);
  const [playing, togglePlaying] = useToggle(false);

  const handleLoadTrack = (track) => {
    setCurrentTrack(track);
  };

  const handlePlayTrack = (track) => {
    setCurrentTrack(track);
    togglePlaying(true);
  };

  return {
    currentTrack,
    playing,
    handleLoadTrack,
    handlePlayTrack,
  };
}
