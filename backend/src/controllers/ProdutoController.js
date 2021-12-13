const conexao = require("../database/connection");
//const { inserir } = require("./ClienteController");

module.exports = {
    async inserir(request , response){
        const { nome,categoria,preco,estoque,unidade,marca,descricao } = request.body;
        const id = await conexao('produtos').insert({
            nome,
            categoria,
            preco,
            estoque,
            unidade,
            marca,
            descricao
        });
        //METODO INSERT VAI RETORNA O ID
        return response.json({id});
    },
    async listar(request , response){
        const resultadoBusca = await conexao('produtos').select('*')
        return response.json(resultadoBusca)
    },
    async listarPorId(request , response){
        const { id } = request.params
        const resultado = await conexao('produtos').select('*').where('id',id);
        return response.json(resultado);
    },
    async atualizar(request , response){
        const { id } = request.params
        const{ nome,categoria,preco,estoque,unidade,marca,descricao,foto} = request.body;
        await conexao('produtos').where('id',id).update({
            nome:nome,
            categoria:categoria,
            preco:preco,
            estoque:estoque,
            unidade:unidade,
            marca:marca,
            descricao:descricao,
            foto:foto
        });
        return response.json('Cadastra atualizado com sucesso !!!');
    },
    async deletar(request , response){
        const { id } = request.params
        await conexao('produtos').where('id',id).delete();
        return response.status(204).send()
    }

}