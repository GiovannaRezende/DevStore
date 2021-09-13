import { Container } from './styled'

export default function Index(){
    return (
        <Container>        
            <div class="cab-esquerda">
                <div class="perfil"><img src="../react/site/public/assets/images/perfil.svg" alt=""/></div>
                <div class="circulo"><img src="../react/site/public/assets/images/circulo.svg" alt=""/></div>
                <div class="nome">Olá, <span>Bruno Oliveira</span></div>
            </div>
            <div class="cab-direita">
                <div class="recarregar"><button><img src="../react/site/public/assets/images/recarregar.svg" alt=""/></button></div>
                <div class="sair"><button><img src="../react/site/public/assets/images/sair.svg" alt=""/></button></div>
            </div>
        </Container>
    )
}