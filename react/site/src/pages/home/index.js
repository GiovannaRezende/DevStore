import Menu from '../../components/menu';
import Cabecalho from '../../components/cabecalho';

import { Container, Conteudo } from './styled'

import { useState, useEffect, useRef } from 'react';

import Api from '../../../src/service/api'
const api = new Api();

export default function Index() {

    return (
        <Container>
            <Menu/>
                <Conteudo> 
                    <Cabecalho/>
                    <div class="cab-novo-prod">
                            <div class="barra"><img src="../react/site/public/assets/images/barra.svg" alt=""/></div>
                            <div class="titulo1">Novo Produto</div>
                        </div>
                        <div class="corpo-novo-prod">
                            <div class="inputs1">
                                <div class="forms1">
                                    <div class="form-produto">
                                        <div class="produto">Produto</div>
                                        <input type="text"/>
                                    </div>
                                    <div class="form-preco-de">
                                        <div class="preco-de">Preço DE:</div>
                                        <input type="text"/>
                                    </div>
                                </div>
                                    <div class="forms2">
                                        <div class="form-categoria">
                                            <div class="categoria">Categoria:</div>
                                            <input type="text"/>
                                        </div>
                                        <div class="form-preco-por">
                                            <div class="preco-por">Preço POR:</div>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div class="forms3">
                                        <div class="form-avaliacao">
                                            <div class="avaliacao">Avaliação:</div>
                                            <input type="text"/>
                                        </div>
                                        <div class="form-estoque">
                                            <div class="estoque">Estoque:</div>
                                            <input type="text"/>
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
                                    <textarea style="resize: none;" cols="69" rows="10"></textarea>
                                    <div class="cadastrar"><button>Cadastrar</button></div>
                                </div>
                            </div>
                        
                
                    <div class="cadastrados">
                        <div class="cab-cadastrados">
                            <div class="barra"><img src="../react/site/public/assets/images/barra.svg" alt=""/></div>
                            <div class="titulo2">Produtos Cadastrados</div>
                        </div>
                        <table>
                            <thead>
                                <tr class="linha-principal">
                                    <th></th>
                                    <th>ID</th>
                                    <th>Produto</th>
                                    <th>Categoria</th>
                                    <th>Preço</th>
                                    <th>Estoque</th>
                                    <th class="botoes1"></th>
                                    <th class="botoes2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="linha-branca">
                                    <td></td>
                                    <td>1</td>
                                    <td>Esfera do Dragão</td>
                                    <td>Acessórios</td>
                                    <td>R$15,56</td>
                                    <td>14</td>
                                    <td class="botoes1"><button><img src="../react/site/public/assets/images/recarregar.svg" alt=""/></button></td>
                                    <td class="botoes2"><button><img src="../react/site/public/assets/images/sair.svg" alt=""/></button></td>
                                </tr>
                                <tr class="linha-cinza">
                                    <td></td>
                                    <td>1</td>
                                    <td>Esfera do Dragão</td>
                                    <td>Acessórios</td>
                                    <td>R$15,56</td>
                                    <td>14</td>
                                    <td class="botoes1"><button><img src="../react/site/public/assets/images/recarregar.svg" alt=""/></button></td>
                                    <td class="botoes2"><button><img src="../react/site/public/assets/images/sair.svg" alt=""/></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </Conteudo>
        </Container>
    )
}