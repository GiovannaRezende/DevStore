import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div class="box1">
                <div class="logo"><img src="/assets/images/logo.svg" alt=""/></div>
                <div class="devstore"><span>Dev</span>Store</div>
            </div> 
            <div class="box2"></div>
            <div class="box3">
                <div class="gerenciamento">Gerenciamento</div>
                <div class="seta-baixo"><img src="/assets/images/seta-baixo.svg" alt=""/></div>
            </div>
            <div class="box4">Alunos</div>
        </Container>
    )
}