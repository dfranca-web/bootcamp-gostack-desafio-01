const express = require("express");
const cors = require("cors");
const routes = require('./router');

/**
 * Cria uma estância do Express
 */
const App = express();

/**
 * Define a liberação de acesso da rota
 * @template ["http://localhost:8080", "https://meusite.com.br"]
 */
App.use(cors());

/**
 * Define o tipo que o express vai trabalhar
 */
App.use(express.json());

/**
 * Define a utilização das rotas
 */
App.use(routes);

/**
 * Definição da porta para rodar a aplicação
 */
App.listen(3000);
