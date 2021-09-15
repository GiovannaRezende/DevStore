import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2B3031;
    height: 100vh;
    position: sticky;
    top: 0px;

.box1 {
    display: flex;  
    flex-direction: row;
    padding: .6em 4em;
    align-items: center;
    height: 4em;
}

.logo {
    margin-right: .5em;
}

.devstore span {
    color: #10EAEA;
    font: 700 1.1em Roboto;
}

.devstore {
    color: white;
    font: 700 1.1em Roboto;
}

.box2 {
    background-color: #262626;
    color: #262626;
    height: 2.6em;
}

.box3 {
    display: flex;
    flex-direction: row;
    padding: .9em 2em;
    align-items: center;
    font: 500 1em Roboto;
    justify-content:space-between;
    width: 11.8em;
}

.gerenciamento {
    color: white;
}

.box4 {
    display: flex;  
    flex-direction: row;
    background-color: #fff;
    padding: .9em 2em;
    font: 600 1em Roboto;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
}

.seta-baixo {
    margin-left: 1em;
}
`


export { Container }