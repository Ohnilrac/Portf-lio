import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.article`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  align-items: center;
`

export const Post = styled.div`
  max-width: 41rem;
  margin-top: 15rem;
  border-radius: 8px;
  background: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  
  img{
    padding: 0 1.5rem ;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3{
    font-size: 2.5rem;

    margin: 1.5rem 0;
  }

  p{
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
  }


  div{
    display: flex;
    justify-content: space-between;
    width: 100%;

    a{
      font-size: 3.5rem;
      width: 6rem;
      height: 4rem;
      margin: 0 2rem 0.75rem 2rem;
      padding-top: 0.25rem;

      text-align: center;

      border-radius: 8px;
      background: ${darken(0.2, '#4ecdc4')};
      color: var(--white);
      transition: all 0.5s;

      &:hover {
        background: ${darken(0.1, '#4ecdc4')};
        color: ${darken(0.6, '#fff')} ;
      }
    }
  }
`