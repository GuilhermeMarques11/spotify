import React from 'react';
import styles from './SingleSong.module.css';
import Player from '../components/Player';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { songsArray } from '../assets/database/songs';
import { artistArray } from '../assets/database/artists';

const SingleSong = () => {
  // Obtém o parâmetro 'id' da URL usando useParams
  const { id } = useParams();
  const navigate = useNavigate();

  // Filtra o array de músicas para encontrar a música correspondente ao 'id' fornecido
  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];

  // Filtra o array de artistas para encontrar o artista correspondente à música
  const currentArtist = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  // Filtra as músicas do artista atual
  const songsArrayFromCurrentArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist,
  );

  // Gera um índice aleatório para selecionar uma música do artista
  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromCurrentArtist.length - 1)
  );

  // Gera outro índice aleatório para selecionar outra música do artista
  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromCurrentArtist.length - 1)
  );

  // Obtém os IDs das músicas aleatórias selecionadas
  const randomIdFromArtistPrev = songsArrayFromCurrentArtist[Math.floor(Math.random() * songsArrayFromCurrentArtist.length)]._id;
  const randomIdFromArtistNext = songsArrayFromCurrentArtist[Math.floor(Math.random() * songsArrayFromCurrentArtist.length)]._id;

  return (
    <div className={styles.song}>
      <div className={styles.song__container}>
        <div className={styles.song__image__container}>
          {/* Exibe a imagem da música */}
          <img
            src={image}
            alt={`Imagem da música ${name}`}
          />
        </div>
      </div>
      <div className={styles.song__bar}>
        {/* Link para a página do artista */}
        <Link to={`/artist/${currentArtist._id}`} className={styles.song__artist__image}>
          <img
            width={75}
            height={75}
            src={currentArtist.image}
            alt={`Imagem do artista ${artist}`}
          />
        </Link>
        {/* Componente do player de música */}
        <Player 
          duration={duration} 
          audio={audio} 
          id={id} 
          randomIdFromArtistPrev={randomIdFromArtistPrev} 
          randomIdFromArtistNext={randomIdFromArtistNext} 
        />
        <div>
          {/* Exibe o nome da música e o artista */}
          <p className={styles.song__name}>{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleSong;