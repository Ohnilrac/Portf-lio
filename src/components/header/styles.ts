import styled from 'styled-components'
import { darken } from 'polished'

export const Background = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    z-index: -100;

    opacity: 0.9;

    img{
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
`

export const Container = styled.header`
  width: 100%;
  margin-top: 45rem;
  z-index: 100;

`

export const Content = styled.nav`
  margin: -55rem 10rem 0 10rem;
  height: 55rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Perfil = styled.div`
  display: flex;
  align-items: center;

  img{
    width: 120px;
    height: 120px;
    margin: 2rem 2rem 0.75rem 0;

    clip-path: circle();
  }

  ul{
    display: flex;

    a{
      display: inline-block;
      font-size: 2.75rem;
      margin-right: 0.5rem;
      color: var(--black);

      transition: 0.3s;

      &:hover{
        transform: translateY(-4px);
        color: var(--gray);
      }
    }
  }

  h4{
    font-size: 3rem;
    color: var(--black);
  }

  h5{
    font-size: 1.5rem;
    color: var(--black);
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;

  a{
    display: inline-block;
    
    font-size: 2rem;
    font-weight: 600;
    margin-left: 1rem;
    padding: 1rem 2.5rem; 

    color: var(--black);

    border: 1px solid var(--black);
    border-radius: 8px;
    background: transparent;
    transition: background 0.3s;

    &:nth-child(4){
      display: flex;
      margin-left: 5rem;
    }
    
    &:hover{
      background: ${darken(0.4, '#fff')};
    }
    
    span{
      font-size: 2rem;
      color: green;
      margin-left: 0.5rem;
    }
  }
`
