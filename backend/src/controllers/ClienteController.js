const conexao = require('../database/connection')

module.exports = {

    async inserir(request, response) {
        const dadosCadastro = request.body;

        const resultado = await conexao('clientes').insert(dadosCadastro);

        return response.json(resultado);
    },

    async listar(request , response){
        const resultadoBusca = await conexao('clientes').select('*');
        return response.json(resultadoBusca);
    },
    async listarPorId(request , response){
        const { id } = request.params
        const resultado = await conexao('clientes').select('*').where('id',id);
        return response.json(resultado);
    },

    async deletar(request , response){
        const { id } = request.params
        await conexao('clientes').where('id',id).delete();
        return response.status(204).send()
    },
    async atualizar(request , response){
        const { id } = request.params
        const{ nome,email,celular,profissao,uf} = request.body;
        await conexao('clientes').where('id',id).update({
            nome:nome,
            sobrenome:sobrenome,
            cpf : cpf,
            sexo:sexo,
            endereco:endereco,
            cidade:cidade,
            uf:uf,
            email:email,
            celular:celular
        });
        return response.json('Cadastra atualizado com sucesso !!!');
    }

}