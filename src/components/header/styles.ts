import styled from 'styled-components'
import { darken } from 'polished'

export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
    opacity: 0.9;

    img{
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

  @media (min-width: 760px) {
    img{
      height: 300px;
    }
  }

  @media (min-width: 1000px) {
    img{
      height: 360px;
    }
  }
`

export const Container = styled.header`
  width: 100%;
  margin-top: 45rem;
  z-index: 100;
`

export const Content = styled.nav`
  width: 80%;
  margin: -43rem auto;
  height: 55rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1500px) {
    margin-top: -55rem;
    flex-direction: row;
    justify-content: space-between;
  }
`
export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 60px;
    height: 60px;
    margin: 1rem auto;
    clip-path: circle();
  }

  ul{
    display: flex;

    a{
      display: inline-block;
      font-size: 1.875rem;
      margin-right: 0.5rem;
      color: var(--white);
      transition: 0.3s;

      &:hover{
        transform: translateY(-4px);
        color: var(--buttons);
      }
    }
  }

  @media (min-width: 760px) {
    img{
      width: 90px;
      height: 90px;
    }

    ul{
      a{
        font-size: 2.875rem;
      }
    }
  }

  @media (min-width: 1000px) {
    img{
      width: 120px;
      height: 120px;
    }

    ul{
      a{
        font-size: 3.25rem;
      }
    }
  }

  @media (min-width: 1500px) {
    flex-direction: row;
  }
`
export const Persona = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
    font-size: 2.2rem;
    color: var(--white);
  }

  p{
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--white);
  }
  
  @media (min-width: 320px) {
    h3{
      font-size: 2.5rem;
    }

    p{
      font-size: 1.5rem;
    }
  }

  @media (min-width: 760px) {
    h3{
      font-size: 3.25rem;
    }

    p{
      font-size: 2.25rem;
    }
  }

  @media (min-width: 1000px) {
  h3{
    font-size: 3.875rem;
  }

  p{
    font-size: 2.75rem;
  }
}
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  background: var(--box);

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--white);
    
    &:hover {
      color: var(--buttons);
      transition: 0.4s;
    }

    &:first-child{
      margin-left: 1.5rem;
    }

    &:last-child{
      margin-right: 1.5rem;
    }

    &:nth-child(2)::before,
    :nth-child(3)::before{
      content: "";
      width: .2rem;
      height: 2rem;
      background: var(--buttons);
      margin: 0.875rem;
    }
  }

  @media (min-width: 320px) {
    margin-top: 2rem;

    a{
      font-size: 1.5rem;
      border: none;
    }
  }

  @media (min-width: 414px) {
    margin-top: 2.75rem;

    a{
      font-size: 1.875rem;
    }
  }

  @media (min-width: 760px) {
    margin-top: 2rem;

    a{
      font-size: 2.75rem;

      &:nth-child(2)::before,
      :nth-child(3)::before{
        margin: 1.5rem;
    }
    }
  }

  @media (min-width: 1000px) {
    margin-top: 3rem;

  a{
    font-size: 3rem;

    &:nth-child(2)::before,
      :nth-child(3)::before{
        margin: 1.875rem;
    }
  }
}
`
