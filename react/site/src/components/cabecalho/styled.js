import styled from 'styled-components'

const Container = styled.div `
    display: flex;  
    flex-direction: row;
    background-color: #ffffff;
    padding: 1em;
    justify-content: space-between;
    margin: 0em 0em 1em 0em;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    width: 81.7vw;
`

const ProfileName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

.circulo img {
    position:absolute; 
    top: 16px; 
    left: 18em;
}

.perfil {
    margin-right: .6em;
}

.nome {
    font: 500 0.8em Roboto;
    color: #615858;
}

.nome span {
    font: 800 1em Roboto;
    color: #615858;
}
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

.recarregar button {
    background-color: #119FDC;
    border-radius: 3em;
    border: none;
    padding: .7em .7em;
    margin-right: .3em;
    cursor: pointer;
}

.sair button {
    background-color: #119FDC;
    border-radius: 3em;
    border: none;
    padding: .6em .7em;
    margin-right: .3em;
    cursor: pointer;
}
`

export { Container, ProfileName, Buttons }