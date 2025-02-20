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
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  
  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  const durationInSeconds = convertToSeconds(duration);

  function convertToSeconds(timeString) {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return seconds + minutes * 60;
  }

  function handlePlayer() {
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(formatTime(audioPlayer.current.currentTime));
        const progressWidth = (audioPlayer.current.currentTime / durationInSeconds) * 100;
        progressBar.current.style.setProperty('--_progress', `${progressWidth}%`);
      }
    }, 1000);

    return () => clearInterval(intervalID);
  }, [isPlaying, durationInSeconds]);

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.src = audio;
      audioPlayer.current.load(); // Carrega a nova fonte
      audioPlayer.current.play(); // Toca a nova música
      setIsPlaying(true); // Inicia a reprodução
    }
  }, [audio]);

  return (
    <div className={styles.player}>
      <div className={styles.player__controllers}>
        <Link to={`/song/${randomIdFromArtistPrev}`}>
          <FontAwesomeIcon className={styles.player__icon} icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className={`${styles.player__icon} ${styles.player__icon__play}`}
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={handlePlayer}
        />
        <Link to={`/song/${randomIdFromArtistNext}`}>
          <FontAwesomeIcon className={styles.player__icon} icon={faForwardStep} />
        </Link>
      </div>
      <div className={styles.player__progress}>
        <p>{currentTime}</p>
        <div className={styles.player__bar}>
          <div ref={progressBar} className={styles.player__bar__progress}></div>
        </div>
        <p>{duration}</p>
        <audio ref={audioPlayer} />
      </div>
    </div>
  );
};

export default Player;