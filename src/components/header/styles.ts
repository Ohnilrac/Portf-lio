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
  width: 80%;
  margin: -55rem auto;
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
      color: var(--white);

      transition: 0.3s;

      &:hover{
        transform: translateY(-4px);
        color: var(--buttons);
      }
    }
  }

  h4{
    font-size: 3rem;
    color: var(--white);
  }

  p{
    font-size: 1.5rem;
    color: var(--white);
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  background: var(--box);

  a{
    width: 15rem;
    height: 5rem;
    border: 2px solid var(--buttons);
    font-size: 2rem;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 0;
    transition: 1s;

    &::after, &::before{
    position: absolute;
    background: var(--box);
    z-index: -1;
    transition: 1s;
    content: '';
    }

    &::before{
      height: 5rem;
      width: 13rem;
    }
    &::after{
      width: 15rem;
      height: 5rem;
    }

    &:hover::after{
      height: 0;
    }
    &:hover::before{
      width: 0;
    }
  }
`
