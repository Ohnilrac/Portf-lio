import perfil from '../../assets/profile.jpg'
import { Container, Content, Menu, Perfil } from './styles'

export function Header() {
  return (
    <Container>
      <div>
        <img className='background' src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      <Content>
        <Perfil>
        <img src={ perfil } alt="" />
        <div>
          <h4>JonasNunes</h4>
          <h5>Desenvolvedor Web - Front-End</h5>
        </div>
        </Perfil>
        <Menu>
          <a href="">Sobre</a>
          <a href="">Projetos</a>
          <a href="">Stacks</a>
          <a href="https://web.whatsapp.com/send?phone=+5581997645036&text=Olá, gostaria de realizar um orçamento para o desenvolvimento de um site!" target='__blank'>Contato</a>
        </Menu>
      </Content>
    </Container>
  )
}