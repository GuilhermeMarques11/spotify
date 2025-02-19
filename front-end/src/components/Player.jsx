import React, { useEffect, useRef, useState } from 'react';
import styles from './Player.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Player = ({
  duration,
  randomIdFromArtistPrev,
  randomIdFromArtistNext,
  audio,
}) => {
  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, 0);
    const seconds = Math.floor(timeInSeconds - minutes * 60)
      .toString()
      .padStart(2, 0);

    return `${minutes}:${seconds}`;
  }

  function convertToSeconds(timeString) {
    const splitArray = timeString.split(':');
    const minutes = Number(splitArray[0]);
    const seconds = Number(splitArray[1]);

    return seconds + minutes * 60;
  }

  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = convertToSeconds(duration);

  function handlePlayer() {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
    setCurrentTime(formatTime(audioPlayer.current.currentTime));
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      isPlaying && setCurrentTime(formatTime(audioPlayer.current.currentTime));
      const progressWidth = (audioPlayer.current.currentTime / durationInSeconds) * 100;
    progressBar.current.style.setProperty('--_progress', `${progressWidth}%` );
    }, 1000);

    return () => clearInterval(intervalID);
  }, [isPlaying]);

  return (
    <div className={styles.player}>
      <div className={styles.player__controllers}>
        <Link to={`/song/${randomIdFromArtistPrev}`}>
          <FontAwesomeIcon
            className={styles.player__icon}
            icon={faBackwardStep}
          />
        </Link>
        <FontAwesomeIcon
          className={`${styles.player__icon} ${styles.player__icon__play}`}
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={handlePlayer}
        />
        <Link to={`/song/${randomIdFromArtistNext}`}>
          <FontAwesomeIcon
            className={styles.player__icon}
            icon={faForwardStep}
          />
        </Link>
      </div>
      <div className={styles.player__progress}>
        <p>{currentTime}</p>
        <div className={styles.player__bar}>
          <div ref={progressBar} className={styles.player__bar__progress}></div>
        </div>
        <p>{duration}</p>
        <audio ref={audioPlayer} src={audio}></audio>
      </div>
    </div>
  );
};

export default Player;
