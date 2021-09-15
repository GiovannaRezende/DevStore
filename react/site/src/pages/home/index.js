import Menu from '../../components/menu';
import Cabecalho from '../../components/cabecalho';

import { Container, Conteudo } from './styled'

import { useState, useEffect, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

import Api from '../../../src/service/api'
const api = new Api();

export default function Index() {

    const [produtos, setProdutos] = useState([]);
    const [produto, setProduto] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precode, setPrecode] = useState('');
    const [precopor, setPrecopor] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [estoque, setEstoque] = useState('');
    const [imagem, setImagem] = useState('');

    const [idAlterando, setIdAlterando] = useState(0);
    const loading = useRef(null);

    async function listar() {
        let r = await api.listar();
        setProdutos(r);
        listar();
    }

    async function inserir() {
       loading.current.continuousStart();

        if(idAlterando === 0) {
            
            if (!produto || produto.replace === '' )
            return toast.error('O campo aluno deve ser preenchido!'); 
            loading.current.complete();
       
            if ( produto.length < 4)
            return toast.error('O campo nome deve ser maior que 4 caracteres!'); 
            loading.current.complete();
       
            //f (chamada <= 0 )
            //return toast.error('O número de chamada deve ser positivo e maior que 0!'); 
            //loading.current.complete();
       
            //if (!chamada || chamada.replace === '')
            //return toast.error('O campo chamada é obrigatório!');
            //loading.current.complete();
            
            ///if(chamada !== parseInt(chamada))
            ///return toast.error('O campo chamada aceita apenas números!');
            ///loading.current.complete();

            //if(chamada === NaN)
            //return toast.error('O campo chamada aceita apenas números!');

            //if(curso.length < 4)
            //return toast.error('O campo curso deve ser maior que 4 caracteres!');
            //loading.current.complete();

            //if(turma.length < 4)
            //return toast.error('O campo turma deve ser maior que 4 caracteres!');
            //loading.current.complete();

        let r = await api.inserir(produto, categoria, precode, precopor, avaliacao, descricao, estoque, imagem);
        if(r.erro) {
            toast.error(`${r.erro}`); 
            loading.current.complete();
        }
        else {
            toast.success('Aluno inserido!');
            loading.current.complete();
        }
    } else {
        let r = await api.alterar(idAlterando, produto, categoria, precode, precopor, avaliacao, descricao, estoque, imagem);
        if(r.erro) 
            toast.error(`${r.erro}`); 
        else {
            toast.success('Aluno alterado!');
            loading.current.complete();
        }

    }
        limparCampos();
        listar();
    }

    function limparCampos() {
        setProduto('');
        setCategoria('');
        setPrecode('');
        setPrecopor('');
        setAvaliacao('');
        setDescricao('');
        setEstoque('');
        setImagem('');
        setIdAlterando(0);
    }

    async function remover(id) {
        loading.current.continuousStart();
        confirmAlert({
            title: 'Remover aluno',
            message: `Tem certeza que deseja remover o aluno ${id}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async() => {
                        let r = await api.remover(id);
                        if(r.erro)
                            toast.error(`${r.erro}`);
                        else {
                            toast.success('Aluno removido!');
                            listar();
                            
                        }
                    }
                },
                {
                    label:'Não'
                }
            ]
        
        })
    }
    

    async function alterar(item){
        loading.current.continuousStart();

        setProduto(item.nm_produto);
        setCategoria(item.ds_categoria);
        setPrecode(item.vl_preco_de);
        setPrecopor(item.vl_preco_por);
        setAvaliacao(item.vl_avaliacao);
        setDescricao(item.ds_descricao);
        setEstoque(item.qtd_estoque);
        setImagem(item.img_produto);
        setIdAlterando(0);
        
    }
    
    useEffect(() => {
        listar();
    }, [])


    return (
        <Container>
            <ToastContainer/>
            <LoadingBar color="purple" ref={loading}/>
            <Menu/>
                <Conteudo> 
                    <Cabecalho/>
            <div class="novo-produto">
                    <div class="cab-novo-prod">
                        <div class="barra"><img src="/assets/images/barra.svg" alt=""/></div>
                        <div class="titulo1">{idAlterando === 0 ? "Novo Produto" : "Alterando produto " + idAlterando}</div>
                    </div>
                    <div class="corpo-novo-prod">
                        <div class="inputs1">
                            <div class="forms1">
                                <div class="form-produto">
                                    <div class="produto">Produto</div>
                                    <input type="text" value={produto} onChange={e => setProduto(e.target.value)}/>
                                </div>
                                <div class="form-preco-de">
                                    <div class="preco-de">Preço DE:</div>
                                    <input type="text" value={precode} onChange={e => setPrecode(e.target.value)}/>
                                </div>
                            </div>
                                <div class="forms2">
                                    <div class="form-categoria">
                                        <div class="categoria">Categoria:</div>
                                        <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/>
                                    </div>
                                    <div class="form-preco-por">
                                        <div class="preco-por">Preço POR:</div>
                                        <input type="text" value={precopor} onChange={e => setPrecopor(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="forms3">
                                    <div class="form-avaliacao">
                                        <div class="avaliacao">Avaliação:</div>
                                        <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/>
                                    </div>
                                    <div class="form-estoque">
                                        <div class="estoque">Estoque:</div>
                                        <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)}/>
                                    </div>
                                </div>
                        </div>
                        </div>
                        <div class="inputs2">
                            <div class="forms4">
                                <div class="link-img">Link Imagem:</div>
                                <input type="text"/>
                            </div>
                            <div class="forms5">
                                <div class="descricao">Descrição:</div>
                                <textarea style={{"resize": "none", "cols": "69", "rows": "10"}}></textarea>
                                <div class="cadastrar"><button onClick={inserir}>{idAlterando === 0 ? "Cadastrar" : "Alterar"}   </button></div>
                            </div>
                        </div>
                    </div>
               
                <div class="cadastrados">
                    <div class="cab-cadastrados">
                        <div class="barra"><img src="/assets/images/barra.svg" alt=""/></div>
                        <div class="titulo2">Produtos Cadastrados</div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>ID</th>
                                <th>Produto</th>
                                <th>Categoria</th>
                                <th>Preço</th>
                                <th>Estoque</th>
                                <th class="botoes"></th>
                                <th class="botoes"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {produtos.map((item, i) =>
                        <tr className={i % 2 === 0 ? "linha-branca" : "linha-cinza"}>
                            <td>{item.img_produto}</td>
                            <td>{item.id_produto} </td>
                            <td title={item.nm_produto}>{item.nm_produto != null && item.nm_produto.length >=25 ? item.nm_produto.substr(0, 25) + "..." : item.nm_aluno }</td>
                            <td>{item.ds_categoria}</td>
                            <td>{item.vl_preco_por}</td>
                            <td>{item.qtd_estoque}</td>
                            <td className="botoes"><button onClick={() => alterar(item)}><img src="/assets/images/editar.svg" alt=""/></button> </td>
                            <td className="botoes"> <button onClick={() => remover(item.id_produto)}><img src="/assets/images/remover.svg" alt=""/></button></td>
                         </tr>
                        )}
                    </tbody>
                    </table>
                </div>
            </Conteudo>
        </Container>
    )
}