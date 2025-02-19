import React from 'react';
import styles from './SingleArtist.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SongList from '../components/SongList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const SingleArtist = () => {
  const { id } = useParams();
  // Array de artistas
  const { name, banner } = artistArray.filter(
    (currentArtistObj) => currentArtistObj._id === id,
  )[0];
  // Array de músicas
  const songsArrayFromCurrentArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name,
  );
  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromCurrentArtist.length - 1),
  );
  const randomIdFromArtist = songsArrayFromCurrentArtist[randomIndex]._id;

  return (
    <div className={styles.artist}>
      <div
        className={styles.artist__header}
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`,
        }}
      >
        <h2 className={styles.artist__title}>{name}</h2>
      </div>
      <div className={styles.artist__body}>
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromCurrentArtist} />
      </div>
      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className={`${styles.icon__play__artist} icon__play `}
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default SingleArtist;
