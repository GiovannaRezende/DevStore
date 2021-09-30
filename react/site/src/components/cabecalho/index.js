import { Container, ProfileName, Buttons } from './styled'

export default function Index(){
    return (
        <Container> 
            <ProfileName>
                <div class="perfil"><img src="/assets/images/perfil (3).svg" alt=""/></div>
                <div class="circulo"><img src="/assets/images/circulo.svg" alt=""/></div>
                <div class="nome">Olá, <span>Bruno Oliveira</span></div>
            </ProfileName>
            <Buttons>
                <div class="recarregar"><button><img src="/assets/images/recarregar.svg" alt=""/></button></div>
                <div class="sair"><button><img src="/assets/images/sair.svg" alt=""/></button></div>
            </Buttons>
        </Container>
    )
}
