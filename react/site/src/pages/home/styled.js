import styled from 'styled-components'

const Conteudo = styled.div `
.novo-produto {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 1.5em;
    margin: 2em 1.8em;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    align-items: space-between;
    width: 66em;
}
.cab-novo-prod {
    display: flex;
    flex-direction: row;
}

.barra {
    padding: 0em .7em;
}

.titulo1 {
    font: 700 1.6em Roboto;
    color: #3C3939;
    padding: 0em 0em 1em 0em;
}

.corpo-novo-prod {
    display: flex;
    flex-direction: column;
}

input {
    border-radius: .3em;
    border: 1px solid #A8A8A8;
    width: 13em;
    height: 2.2em;
    outline: none;
}

.inputs1 {
    display: flex;
    flex-direction: column;
}

.forms1 {
    display: flex;
    flex-direction: row;
    padding: 0em 0em .8em 0em;
}

.form-produto {
    display: flex;
    flex-direction: row;
    margin: 0em 0em 0em 5em;
}

.form-preco-de {
    display: flex;
    flex-direction: row;
    margin: 0em 0em 0em 6.3em;
}

.forms2 {
    display: flex;
    flex-direction: row;
    padding: 0em 0em .8em 0em;
}

.form-categoria {
    display: flex;
    flex-direction: row;
    margin: 0em 0em 0em 4.2em;
}

.form-preco-por {
    display: flex;
    flex-direction: row;
    margin: 0em 0em 0em 5.7em;
}

.forms3 {
    display: flex;
    flex-direction: row;
    padding: 0em 0em .8em 0em;
}

.form-avaliacao {
    display: flex;
    flex-direction: row;
    margin: 0em 0em 0em 4.2em;
}

.form-estoque {
    display: flex;
    flex-direction: row;
    margin: 0em 0em 0em 6.6em;
}

.produto, .preco-de, .categoria, .preco-por, .avaliacao, .estoque, .link-img, .descricao {
    font: 600 .8em Roboto;
    color: #615858;
    margin-right: .3em;
}

.inputs2 {
    display: flex;
    flex-direction: column;
}

.forms4 {
    display: flex;
    flex-direction: row;
    margin: 0em 0em 0em 3.1em;
    padding: 0em 0em .8em 0em;
}

.forms4 input {
    width: 37.8em;
}

.forms5 {
    display: flex;
    flex-direction: row;
    margin: 0em 0em 0em 4.1em;
}

textarea{
    margin-right: 1.5em;
    border-radius: .3em;
    border: 1px solid #A8A8A8;
    outline: none;
}

.cadastrar {
    align-self: flex-end;
}

.cadastrar button {
    padding: .6em 1em;
    border-radius: 1.2em;
    background-color: #119FDC;
    border: none;
    color: white;
    font: 500 .8em Roboto;
    cursor: pointer;
}

.cadastrados {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 2em 2em 2em 1em;
    margin: .3em 1.9em;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    overflow: hidden;
    overflow-y: scroll;
    max-height: 40em;
    width: 66em;
 
}

.cab-cadastrados {
    display: flex;
    flex-direction: row;
}

.titulo2 {
    font: 700 1.6em Roboto;
    color: #3C3939;
    padding: 0em 0em .7em 0em;
}

table {
    border-collapse: collapse; 
    width: 50em;
}

.linha-principal {
    background-color: #6CC3DF;
    color: white;
    font: 500 .8em Roboto;
    height: 4em;
    align-items: center;
    width: 3em;
}

.linha-branca td {
    background-color: #f5f5f5;
    color: #6D6868;
    font: 500 .8em Roboto;
    text-align: center;
    height: 3em;
}

.linha-cinza td {
    background-color: #fff;
    color: #6D6868;
    font: 500 .8em Roboto;
    text-align: center;
    height: 3em;
}

 td {
    background-color: #f5f5f5;
    color: #6D6868;
    font: 500 .8em Roboto;
    text-align: center;
    height: 4em;
}

.botoes button {
    background-color: #565656;
    border: none;
    border-radius: 2em;
    padding: .7em .5em;
    cursor: pointer;
}

.botoes button {
    background-color: #565656;
    border: none;
    border-radius: 2em;
    padding: .6em .6em;
    cursor: pointer;
}

.botoes button:hover {
    background-color: #3C3939;
}

.botoes > button {
    visibility: hidden;
}

tr:hover {
    .botoes > button {
    visibility: visible;
    }
}


`

const Container = styled.div `
    display: flex;
    flex-direction: row;
    height: 140vh;
    background-color: #f5f5f5;
`

export { Container, Conteudo }
