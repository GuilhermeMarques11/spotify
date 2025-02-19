import { MongoClient } from 'mongodb'; // Importa a classe MongoClient do driver MongoDB

// Define a URI de conexão ao banco de dados MongoDB, incluindo credenciais e configurações
const URI =
  'mongodb+srv://guilhermemds750:9GmtGUIoGUeFCFvL@cluster0.55sko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Cria uma nova instância do MongoClient usando a URI definida
const client = new MongoClient(URI);

// Exporta a instância da conexão com o banco de dados 'projeto_spotify'
export const db = client.db('projeto_spotify');