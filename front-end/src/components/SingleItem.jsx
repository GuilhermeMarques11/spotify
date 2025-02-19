import React from 'react';
import styles from './SingleItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SingleItem = ({ _id, name, image, artist, idPath }) => {
  return (
    <Link className={styles.singleItem} to={`${idPath}/${_id}`}>
      <div className={styles.singleItem__div__image__button}>
        <div className={styles.singleItem__div__image}>
          <img
            className={styles.singleItem__image}
            src={image}
            alt={`Imagem do artista ${name}`}
          />
        </div>
        <FontAwesomeIcon
          className={styles.icon__play}
          icon={faCirclePlay}
        />
      </div>
      <div className={styles.singleItem__texts}>
        <div className={styles.singleItem__2lines}>
          <p className={styles.singleItem__title}>{name}</p>
        </div>
        <p className={styles.singleItem__type}>{artist ?? 'Artista'}</p>
      </div>
      </Link>
  );
};

export default SingleItem;
