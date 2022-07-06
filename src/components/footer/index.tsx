import { Container, Content } from "./styles";
import { RiReactjsLine } from 'react-icons/ri'
import { AiFillInstagram, AiOutlineGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'



export function Footer() {
  return(
    <Container>
      <Content>
        <h3>
          Desenvolvido com <span><RiReactjsLine /></span> por Jonas Nunes
        </h3>
        <ul>
          <li>
            <a href="https://www.instagram.com/jonasnuness/"
              target="__blank"><AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jonas-nunes-a30b57138/" 
              target="__blank"><AiFillLinkedin /></a>
          </li>
          <li>
            <a href="https://twitter.com/Jonas_Nunes_" 
              target="__blank"><AiFillTwitterCircle /></a>
          </li>
          <li>
            <a href="https://github.com/Ohnilrac" 
              target="__blank"><AiOutlineGithub /></a>
          </li>
          </ul>
      </Content>
    </Container>
  )
}