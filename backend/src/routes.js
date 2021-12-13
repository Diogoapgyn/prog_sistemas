const express = require("express")
//const conexao = require('./database/connection')
const routes = express.Router();
//Importar da pasta controller
const clienteController = require('./controllers/ClienteController');
const produtoController = require('./controllers/ProdutoController');
const vendaController = require('./controllers/VendaController');


// ---------------METODOS CLIENTES----------------------
//CADASTRAR
routes.post('/cliente/inserir' , clienteController.inserir)
//LISTAR
routes.get('/cliente/listar' , clienteController.listar)
//LISTAR POR ID
routes.get('/cliente/listarPorId/:id' , clienteController.listarPorId)
//DELETAR
routes.delete('/cliente/deletar/:id' , clienteController.deletar)
//ATUALIZAR
routes.put('/cliente/atualizar/:id' , clienteController.atualizar)
module.exports = routes;


// ---------------METODOS PRODUTOS----------------------
//Cadastrar
routes.post('/produto/inserir' , produtoController.inserir)
//Listar Todos
routes.get('/produto/listar' , produtoController.listar)
//Atualiar
routes.put('/produto/atualizar/:id' , produtoController.atualizar)
//DELETAR
routes.delete('/produto/deletar/:id' , produtoController.deletar)
//LISTAR POR ID
routes.get('/produto/listarPorId/:id' , produtoController.listarPorId)

// ---------------METODOS VENDAS----------------------
routes.post('/venda/inserir' , vendaController.inserir )
//LISTAR POR ID
routes.get('/venda/listarPorId/:id' , vendaController.listarPorId)