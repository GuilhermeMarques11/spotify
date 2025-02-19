import React, { useState } from 'react';
import styles from './SongList.module.css';
import SongItem from './SongItem';

const SongList = ({songsArray}) => {
  const [items, setItems] = useState(5);

  return (
    <div className={styles.song__list}>
      {songsArray.filter((currentValue, index) => index < items ).map((currentSongObj, index) => 
      <SongItem {...currentSongObj} key={index} index={index}/>)}
      {items < songsArray.length && <p onClick={() => setItems(items + 5)} className={styles.song__list__see_more}>Ver mais</p>}
    </div>
  )
}

export default SongList
