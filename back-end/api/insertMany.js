
// import { songsArray } from '../../front-end/src/assets/database/songs.js'; // Importa o array de músicas
// import { db } from './connect.js'; // Importa a conexão com o banco de dados

// const insertData = async () => {
//   try {
//     // Cria um novo array de músicas, removendo o campo 'id' de cada objeto
//     const newSongsArray = songsArray.map(({ id, ...rest }) => rest);

//     // Insere o array de músicas no banco de dados
//     const responseSongs = await db.collection('songs').insertMany(newSongsArray);
//     console.log(`${responseSongs.insertedCount} músicas inseridas com sucesso!`);

//     console.log(`${responseSongs.insertedCount} músicas inseridas com sucesso!`);
//   } catch (error) {
//     console.error('Erro ao inserir dados:', error);
//   }
// };

// // Chama a função para inserir os dados
// insertData();