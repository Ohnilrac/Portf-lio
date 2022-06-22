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
          <div>
            <img src={ perfil } alt="" />
            <ul>
              <li>Instagram colocar icones</li>
              <li>Linkedin</li>
              <li>Github</li>
              <li>Twitter</li>
            </ul>
          </div>
        <div>
          <h4>JonasNunes</h4>
          <h5>Desenvolvedor Web - FrontEnd</h5>

        </div>
        </Perfil>
        <Menu>
          <a href="">Sobre</a>
          <a href="">Projetos</a>
          <a href="">Stacks</a>
          <a href="https://web.whatsapp.com/send?phone=+5581997645036&text=Olá, gostaria de realizar um orçamento para o desenvolvimento de um site!" target='__blank'>Contato colocar icone do whats</a>
        </Menu>
      </Content>
    </Container>
  )
}