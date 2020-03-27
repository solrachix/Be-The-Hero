require('dotenv').config()

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
// app.listen(3333);

/**
 * TIPOS DE REQUISIÇÕES HTTP:
 * 
 * GET:     Buscar/Listar uma informação de Back-end
 * POST:    Criar uma informação no Back-end
 * PUT:     Alterar uma informação no Back-end
 * DELETE:  Deletar uma informação no Back-end
 * 
 */

 /**
 * TIPOS DE PARAMETROS:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" geralmente para (filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizada para criar ou alterar recursos
 * 
*/


 /**
  * Banco de Dados:
  * 
  * SQL: MYSQL, SQLite, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc...
*/

/**
 * Driver:        Select * from users;
 * Query Builder: table('users').select('*').where()
 */
