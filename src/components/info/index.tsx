import { Content, Container, Icons, Profile, Name, Links, About } from './styles'
import perfil from '../../assets/profile.jpg'
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from 'react-icons/di'
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub
} from 'react-icons/ai'

export function Info() {
  return (
    <Container>
      <Content id='header'>
        <Profile>
          <img src={perfil} alt="" />
          <ul>
            <li>
              <a href="https://www.instagram.com/jonasnuness/" target="__blank">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jonas-nunes-a30b57138/"
                target="__blank"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Jonas_Nunes_" target="__blank">
                <AiFillTwitterCircle />
              </a>
            </li>
            <li>
              <a href="https://github.com/Ohnilrac" target="__blank">
                <AiOutlineGithub />
              </a>
            </li>
          </ul>
        </Profile>
        <Name>
          <h3>JonasNunes</h3>
          <p>Desenvolvedor Web - FrontEnd</p>
        </Name>
        <Links>
          <a href="#projects">Projetos</a>
          <a href="#stacks">Stacks</a>
          <a href="https://web.whatsapp.com/send?phone=+5581997645036&text=Olá, gostaria de realizar um orçamento para o desenvolvimento de um site!" target='__blank'>Contato</a>
        </Links>
      </Content>
      <About>
          <h2>Sobre</h2>
          <p>
            Olá, eu sou Jonas Nunes desenvolvedor Web FrontEnd e estou aberto
            para ter a oportunidade de poder trabalhar com você. Sou apaixonado
            pela área de tecnologia e todo o universo Geek. Seja muito bem
            vindo&#40;a&#41; ao meu mundo e fique a vontade para olhar os
            trabalhos que por mim já foram desenvolvidos e os que tambem estão
            em andamento!
          </p>
          <p>
            Abaixo você consegue acessar todos os projetos hospedados para
            visualização.
          </p>

        <Icons>
          <li className="html">
            <DiHtml5 />
          </li>
          <li className="css">
            <DiCss3 />
          </li>
          <li className="js">
            <DiJsBadge />
          </li>
          <li className="react">
            <DiReact />
          </li>
        </Icons>
      </About>
    </Container>
  )
}
