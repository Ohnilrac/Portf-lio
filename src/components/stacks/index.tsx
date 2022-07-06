import { Title } from "../projects/styles";
import { Content, Stack, Tools } from "./styles";
import { DiHtml5, DiCss3, DiJsBadge, DiReact} from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import { BsHourglassSplit } from 'react-icons/bs'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'





export function Stacks() {
  return (
    <Tools id="stacks">
      <Title><h2>STACKS</h2></Title>
      <Content>
        <Stack>
          <span className="html"><DiHtml5 /></span>
          <p>
            <span><BsHourglassSplit /></span>8 Meses
          </p>
          <p>
            <span><AiOutlineFundProjectionScreen /></span>10 Projetos
          </p>
        </Stack>
        <Stack>
          <span className="css"><DiCss3 /></span>
          <p>
            <span><BsHourglassSplit /></span>8 Meses
          </p>
          <p>
            <span><AiOutlineFundProjectionScreen /></span>14 Projetos
          </p>
        </Stack>
        <Stack>
          <span className="js"><DiJsBadge /></span>
          <p>
            <span><BsHourglassSplit /></span>4 Meses
          </p>
          <p>
            <span><AiOutlineFundProjectionScreen /></span>3 Projetos
          </p>
        </Stack>
        <Stack>
          <span className="react"><DiReact /></span>
          <p>
            <span><BsHourglassSplit /></span>4 Meses
          </p>
          <p>
            <span><AiOutlineFundProjectionScreen /></span>4 Projetos
          </p>
        </Stack>
        <Stack>
          <span className="types"><SiTypescript /></span>
          <p>
            <span><BsHourglassSplit /></span>4 Meses
          </p>
          <p>
            <span><AiOutlineFundProjectionScreen /></span>4 Projetos
          </p>
        </Stack>
      </Content>
    </Tools>
  )
}