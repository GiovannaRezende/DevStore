import axios from 'axios'
const api = new axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listar() {
        let r = await api.get('/produtos');
        return r.data;
    }

    async inserir(produto, categoria, precode, precopor, avaliacao, descricao, estoque, imagem, ativo, inclusao) {
        let r = await api.post('/produtos', { produto, categoria, precode, precopor, avaliacao, descricao, estoque, imagem, ativo, inclusao } );
        return r.data;
}

    async alterar(id,  produto, categoria, precode, precopor, avaliacao, descricao, estoque, imagem, ativo, inclusao) {
        let r = await api.put('/produtos/'+ id, { produto, categoria, precode, precopor, avaliacao, descricao, estoque, imagem, ativo, inclusao } );
        return r.data;
    }

    async remover (id) {
        let r = await api.delete('/produtos/' + id);
        return r.data;
    }
}
