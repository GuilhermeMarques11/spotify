import express from 'express';
import cors from 'cors';
import { db } from './connect.js';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const PORT = 3000;

app.use(cors());

// Rota para obter artistas
app.get('/api/artists', async (request, response) => {
  try {
    const artists = await db.collection('artists').find({}).toArray();
    response.send(artists);
  } catch (error) {
    response.status(500).send('Erro ao buscar artistas');
  }
});

// Rota para obter músicas
app.get('/api/songs', async (request, response) => {
  try {
    const songs = await db.collection('songs').find({}).toArray();
    response.send(songs);
  } catch (error) {
    response.status(500).send('Erro ao buscar músicas');
  }
});

// Serve arquivos estáticos do front-end
app.use(express.static(path.join(__dirname, '../front-end/dist')));

// Rota para servir o index.html
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, '../front-end/dist/index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});