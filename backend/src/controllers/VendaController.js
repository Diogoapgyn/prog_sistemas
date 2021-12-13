const conexao = require("../database/connection");
//const { listarPorId } = require("./ClienteController");


module.exports = {
    async inserir(request , response){
        const{ id_cliente , id_produto } = request.body;

        await conexao('vendas').insert({
            id_cliente : id_cliente,
            id_produto : id_produto
        })
        return response.status(204);
    },
    async listarPorId(request , response){
        const { id } = request.params;
        const resultadoBusca = await conexao('vendas').
                            join('clientes' ,'vendas.id_cliente' , 'clientes.id').
                            select('clientes.*' , 'vendas.*');
        return response.json(resultadoBusca)

    }
}