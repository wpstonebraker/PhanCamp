import React, { useState, useRef, useEffect } from "react";

function MusicPlayer(props) {
  const { trackUrl, trackName, playing } = props;
  // const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  // const [src, setSrc] = useState(props.trackUrl);
  const [playButton, setPlayButton] = useState(window.playIcon);
  // const [title, setTitle] = useState(props.track.trackName);
  // const [eCount1, setECount1] = useState(0);
  // const [eCount2, setECount2] = useState(0);

  const audio = useRef();
  const progressBar = useRef();
  const progressPlayed = useRef();

  const togglePlay = () => {
    const audioElement = audio.current;
    if (audioElement.paused) {
      audioElement.play();
      setPlayButton(window.pauseIcon);
    } else {
      audioElement.pause();
      setPlayButton(window.playIcon);
    }
  };

  const convertTime = (time) => {
    const minutes = Math.floor(time / 60);
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(time - minutes * 60);
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${displayMinutes}:${displaySeconds}`;
  };

  const handleTime = () => {
    const audioElement = audio.current;
    const time = convertTime(audioElement.currentTime);
    const durationTime = convertTime(audioElement.duration);
    setCurrentTime(time);
    setDuration(durationTime);
    handleProgress();
  };

  const handleProgress = () => {
    const audioElement = audio.current;
    const percent = (audioElement.currentTime / audioElement.duration) * 100;
    progressPlayed.current.style.flexBasis = `${percent}%`;
  };

  const scrub = (e) => {
    e.preventDefault();
    const audioElement = audio.current;
    const scrubTime =
      (e.nativeEvent.offsetX / progressBar.current.offsetWidth) *
      audioElement.duration;
    audioElement.currentTime = scrubTime;
  };

  useEffect(() => {
    if (audio.current) {
      audio.current.src = trackUrl;
      if (playing) {
        audio.current.play();
        setPlayButton(window.pauseIcon);
      } else {
        audio.current.pause();
        setPlayButton(window.playIcon);
      }
    }
  }, [trackUrl, playing]);

  return (
    <div id="audio-player-box">
      <div onClick={togglePlay} id="play-button-box">
        <img src={playButton} id="play-button" alt="" />
      </div>
      <div id="audio-player-right">
        <div id="track-info-box">
          <div id="track-info-display">
            <span id="track-info-title">{trackName}</span>
            <span id="track-info-time">
              {currentTime} / {duration === `NaN:NaN` ? `00:00` : duration}
            </span>
          </div>
        </div>
        <div id="progress-bar-box">
          <div id="progress-bar" onClick={scrub} ref={progressBar}>
            <div id="progress-bar-played" ref={progressPlayed}></div>
            <div id="progress-bar-block" />
          </div>
        </div>
        <audio
          controls
          onTimeUpdate={handleTime}
          id="audio-player"
          ref={audio}
          src={trackUrl}
        ></audio>
      </div>
    </div>
  );
}

export default MusicPlayer;
