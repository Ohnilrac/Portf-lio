import { Container, Icons } from './styles'
import { DiHtml5, DiCss3, DiJsBadge, DiReact} from 'react-icons/di'

export function Main(){
  return (
        <>
        <Container id="sobre"> 
          <section>
            <div>
              <h2>Sobre</h2>
              <p>Olá, eu sou Jonas Nunes desenvolvedor Web FrontEnd e estou aberto para ter a oportunidades de poder trabalhar com você. Sou apaixonado pela área de tecnologia e todo o universo Geek. Seja muito bem vindo&#40;a&#41; ao meu mundo e fique a vontade para olhar os trabalhos que por mim já foram desenvolvidos e os que tambem estão em andamento!</p>
              <p>Abaixo você consegue acessar todos os projetos hospedados para visualização.</p>
            </div>

            <Icons>
              <li className='html'><DiHtml5 /></li>
              <li className='css'><DiCss3 /></li>
              <li className='js'><DiJsBadge /></li>
              <li className='react'><DiReact /></li>
            </Icons>
          </section>
        </Container>
        </>
  )
}