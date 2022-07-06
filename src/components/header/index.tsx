import perfil from '../../assets/profile.jpg'
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import { Background, Container, Content, Menu, Perfil } from './styles'

export function Header() {
  return (
    <>
      <Background>
        <img src="https://images.unsplash.com/photo-1586645068267-21a3e8949fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" />
      </Background>
    <Container>
      <Content>
        <Perfil>
          <div>
            <img src={ perfil } alt="" />
            <ul>
              <li>
                <a href="https://www.instagram.com/jonasnuness/" target="__blank"><AiFillInstagram /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jonas-nunes-a30b57138/" target="__blank"><AiFillLinkedin /></a></li>
              <li>
                <a href="https://twitter.com/Jonas_Nunes_" target="__blank"><AiFillTwitterCircle /></a></li>
              <li>
                <a href="https://github.com/Ohnilrac" target="__blank"><AiOutlineGithub /></a></li>
            </ul>
          </div>
          <div>
            <h4>JonasNunes</h4>
            <p>Desenvolvedor Web - FrontEnd</p>
          </div>
        </Perfil>
        <Menu>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#stacks">Stacks</a>
          <a href="https://web.whatsapp.com/send?phone=+5581997645036&text=Olá, gostaria de realizar um orçamento para o desenvolvimento de um site!" target='__blank'>Contato</a>
        </Menu>
      </Content>
    </Container>
  </>
  )
}