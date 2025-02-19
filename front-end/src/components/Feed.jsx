import React from 'react';
import styles from './Feed.module.css';
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';
import Footer from './Footer';

const Feed = ({ type }) => {
  return (
    <>
      <div className={styles.feed}>
        {type === 'artists' || type === undefined ? (
          <ItemList
            title="Artistas"
            items={8}
            itemsArray={artistArray}
            path="/artists"
            idPath="/artist"
          />
        ) : (
          <></>
        )}

        {type === 'songs' ||
          (type === undefined && (
            <ItemList
              title="Músicas"
              items={10}
              itemsArray={songsArray}
              path="songs"
              idPath="/song"
            />
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Feed;
