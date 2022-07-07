import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.article`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.div`
  margin-top: 10rem;
  position: relative;

  &::after, &::before {
    content: '';
    position: absolute;
    width: 100%;
    background: var(--buttons);
    height: 3px;
    /* margin-bottom: 3rem; */
  }
  
  h2{
    padding: 0.25rem;
    font-size: 4rem;
    font-weight: 600;
    color: var(--white);
  }
`


export const Content = styled.section`
  display: grid;
  gap: 9rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`

export const Post = styled.div`
  max-width: 31rem;
  margin-top: 4rem;
  border-radius: 8px;
  background: var(--box);

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
    color: var(--white);
    font-size: 2.5rem;
    margin: 1.5rem 0;
  }

  p{
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    color: var(--white);
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
      background: var(--buttons);
      color: var(--background);
      transition: color 0.5s;

      &:hover {
        color: ${darken(0.2, '#fff')} ;
      }
    }
  }

  .dev{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    font-weight: bold;
    border-radius: 8px;
    background: var(--buttons);
    color: var(--background);
    padding: 0.5rem;
    margin-bottom: 1rem;
    transition: color 0.5s;

    &:hover {
      color: var(--white);
    }
    }
`