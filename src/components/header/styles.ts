import styled from 'styled-components'

export const Container = styled.header`
  margin-left: 10rem;
  margin-right: 10rem;
`
export const Content = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 130px;
    height: 130px;
    margin: 2rem 0 0.75rem 0;

    clip-path: circle();
  }

  span{
    color: var(--green);
    font-size: 3rem;
  }

  h4{
    font-size: 2rem;
    color: var(--gray);
  }
`

export const Menu = styled.ul`
  display: flex;

  li{
    padding: 1rem 2.5rem;

    &:nth-child(3){
      margin-right: 10rem;
    }
  }

  a{
    color: var(--gray);
    font-size: 2.5rem;

    transition: color 0.3s;

    &:hover{
      color: var(--white);
    }
  }

  .contact{
    font-weight: bold;
    border-radius: 25px;
    border: none;

    cursor: pointer;

    color: var(--white);
    background: var(--green);
    transition: filter 0.3s;
    
    &:hover{
      filter: brightness(0.8);
    }
  }
`
