const { response } = require("express")
const express = require("express")

const routes = require('./routes')

const app = express()

app.use(express.json())

app.use(routes);

app.listen(3333)

//PUT:atualizar informações
//DELETE:deletar informações
//GET:buscar informações
//POST:enviar informações

//Query params: parametro de Busca - Utilizados para fazer busca,filtros,paginação
//Route params: parametro de Rota - Utilizados para identificação,busca especifica,apagar registros
//Body params: parametro de corpo - Utilizado para passar cadastro,atualização

/*
FORMA USADA QUERY PARAMS
app.get('/home', (request, response) => {
    //'/home' via query no request.query
    //return response.send("Alo Mundão")


    /*Recebe do INSONOMMIA os dados atraves da URL e mostra no Terminal
    const params = request.query

     /*Mostra os dados no terminal
    //console.log(params)

    //enviando dados do backend(index.js) para frond(Insonommia)
    return response.json({
        nome : "Diogo Neves",
        idade : 18
    })
    

    //O que for passado na URL,entra no query vincula no params,e response envia para Insonomia saindo as variaveis nome e idade
    const params = request.query
    return response.json({
        "nome": params.nome,
        "idade": params.idade
    })
})
//RESPONSE e o que envia para FRONTEND ISONOMMIA
app.get('/buscar/:id', (request, response) => {
     const params = request.params
     return response.json({
        "identificador": params.id
     })
})

app.post('/cadastrar', (request,response) =>{
    const dadosCadastro = request.body
    return response.json({
            "nome": dadosCadastro.nome,
            "profissao":dadosCadastro.profissao
    })
})

*/
