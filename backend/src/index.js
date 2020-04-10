const express = require('express');//pacote
const cors = require('cors');//pacote de segurança
const routes = require('./routes');//arquivo

const app = express();

app.use(cors()); //add depois origin:'http://meuapp.com'
app.use(express.json());
app.use(routes);

app.listen(3333);

/*METODOS HTTP
*GET:BUSCAR
*POST:CRIAR
*PUT:ALTERAR
*DELETE:APAGAR
*/

/**
 * PARAMETROS 
 * Query params:parametros na rota (Filtros, paginação)
 * Route params:parametro par identificar recurso
 * Body: corpo da requisiçaõ
 * 
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsfot SQL Server
  * NoSql: MongoDB, CouchDB
  */

  /*
  * Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where()
  */
