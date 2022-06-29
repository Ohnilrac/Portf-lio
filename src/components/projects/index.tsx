import { Container, Content, Post } from "./styles";
import {AiFillEye, AiFillGithub} from "react-icons/ai"

import loja from "../../assets/loja.png"
import amazing from "../../assets/amazing.png"
import codar from "../../assets/codar.png"
import destino from "../../assets/destino.png"
import estetica from "../../assets/estetica.png"
import financas from "../../assets/financas.png"
import wait from "../../assets/wait.gif"

export function Projects(){
  return (
    <Container>
      <Content>
        <Post>
          <img src={wait} alt="" />
          <h3>Meu site</h3>
          <p>E esse é o projeto em que você atualmente está navegando</p>
          <a href="https://github.com/Ohnilrac/Portfolio" target="_blank">Em desenvolvimento</a>
        </Post>
        <Post>
          <img src={loja} alt="" />
          <h3>Loja de naturais</h3>
          <p>Uma loja virtual, para pratica de projetos em react com typescript e styled-components.</p>
          <div>
            <a href="https://github.com/Ohnilrac/Loja" target="_blank"><AiFillGithub /></a>
            <a href="https://loja-wine.vercel.app" 
            target="_blank"><AiFillEye /></a>
          </div>
        </Post>
        <Post>
          <img src={destino} alt="" />
          <h3>Seu-Destino</h3>
          <p>Uma aplicação que, quando o usuário realiza uma pergunta sobre seu destino, em questão de segundos ele receberá a resposta do seu questionamento!</p>
          <div>
            <a href="" target="_blank"><AiFillGithub /></a>
            <a href="" target="_blank"><AiFillEye /></a>
          </div>
        </Post>
        <Post>
          <img src={codar} alt="" />
          <h3>Codar-site</h3>
          <p>Esse foi o desafio para desenvolver um site que desenvolve outros sites para empresas, desenvolvi em React, para praticar meu conhecimento na ferramenta</p>
          <div>
            <a href="" target="_blank"><AiFillGithub /></a>
            <a href="" target="_blank"><AiFillEye /></a>
          </div>
        </Post>
        <Post>
          <img src={financas} alt="" />
          <h3>Financas</h3>
          <p>Projeto em react feito com typescript, styled-componente, hooks e contextos, aplicação feita para estudo.</p>
          <div>
            <a href="" target="_blank"><AiFillGithub /></a>
            <a href="" target="_blank"><AiFillEye /></a>
          </div>
        </Post>
        <Post>
          <img src={amazing} alt="" />
          <h3>AmazingGraph</h3>
          <p>Um projeto de desáfio dev para práticas de HTML,CSS e JS, uma landing page simples, mas com o intuito de fixação de conhecimento em desenvolvimento web.</p>
          <div>
            <a href="" target="_blank"><AiFillGithub /></a>
            <a href="" target="_blank"><AiFillEye /></a>
          </div>
        </Post>
        <Post>
          <img src={estetica} alt="" />
          <h3>Estetica Capilar</h3>
          <p>Um projeto realizado na NLW6 da RocketSeat e com algumas modificações minhas utilizando o basico de HTML,CSS e JS, completamente responsivo e com funcionalidade.</p>
          <div>
            <a href="https://github.com/Ohnilrac/estetica_capilar" target="_blank"><AiFillGithub /></a>
            <a href="https://ohnilrac.github.io/estetica_capilar/" target="_blank"><AiFillEye /></a>
          </div>
        </Post>
      </Content>
    </Container>
  )
}