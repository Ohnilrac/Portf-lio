import perfil from '../../assets/profile.jpg'
import { Container, Content, Menu, Perfil } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <Perfil>
        <img src={ perfil } alt="" />
        <h4><span>.</span>JonasNunes</h4>
        </Perfil>
        <div>
          <Menu>
            <li><a href="">Stacks</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Sobre</a></li>
            <li className='contact'><a href="https://web.whatsapp.com/send?phone=+5581997645036&text=Olá, gostaria de realizar um orçamento para o desenvolvimento de um site!" target='__blank'>Contato</a></li>
          </Menu>
        </div>
      </Content>
    </Container>
  )
}