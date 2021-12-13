//Tem acesso ao banco
const knex = require('knex');

//acessar o arquivo knexfile onde tem as configurações do banco (CHAVE)
const configuration = require('../../knexfile')

//criar conexao com ambiente de desenvolvimento
const conexao = knex(configuration.development)

module.exports =  conexao