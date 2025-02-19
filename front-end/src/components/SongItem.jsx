import React from 'react';
import styles from './SongItem.module.css';
import { Link } from 'react-router-dom';

const SongItem = ({index, _id, image, name, duration}) => {
  return (
    <Link to={`/song/${_id}`} className={styles.song__item}>
      <div className={styles.song__item__number__album}>
        <p>{index + 1}</p>
        <div className={styles.song__item__album}>
          <img
            src={image}
            alt={`Imagem da música ${name}`}
            className={styles.song__item__image}
          />
          <p className={styles.song__item__name}>{name}</p>
        </div>
      </div>
      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
