import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.header`

  .background{
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
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
    margin: 2rem 0 0.75rem 0;

    clip-path: circle();
  }

  h4{
    font-size: 3rem;
    margin-left: 2rem;

    color: var(--white);
  }

  h5{
    font-size: 1.5rem;
    margin: 1rem 0 0 2rem;

    color: var(--white);
  }
`

export const Menu = styled.div`
  display: flex;

  a{
    display: inline-block;
    
    font-size: 2rem;
    margin-left: 1rem;
    padding: 1rem 2.5rem; 

    color: var(--white);

    border: 1px solid var(--white);
    border-radius: 8px;
    background: transparent;

    &:nth-child(3){
      margin-right: 5rem;
    }

    &:hover{
      background: ${darken(0.7, '#fff')};
    }
  }
`
