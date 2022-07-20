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
  }
  
  h2{
    padding: 0.25rem;
    font-size: 3rem;
    font-weight: 600;
    color: var(--white);
  }

  @media (min-width: 414px) {
    h2{
      font-size: 3.25rem;
    }
  }
`

export const Content = styled.section`
  display: grid;
  gap: 5rem;
  grid-template-columns: 1fr;
  align-items: center;

  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Post = styled.div`
  margin-top: 4rem;
  border-radius: 8px;
  background: var(--box);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  img{
    padding: 0 1.5rem ;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h3{
    color: var(--white);
    font-size: 2.2rem;
    padding: 1.5rem .5rem;
    text-align: center;
  }

  p{
    font-size: 1.35rem;
    margin-bottom: 1rem;
    padding: 1rem;
    width: 32rem;
    color: var(--white);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  div{
    display: flex;
    justify-content: space-between;
    width: 100%;

    a{
      font-size: 2.55rem;
      width: 5rem;
      height: 3rem;
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

    font-size: 1.75rem;
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

@media (min-width: 414px) {
  h3{
    font-size: 2.875rem;
  }

  p{
    font-size: 1.75rem;
  }

  div{

    a{
      font-size: 2.875rem;
      width: 6rem;
      height: 3.75rem;
    }
  }

  .dev{
    font-size: 2rem;
  }
}

@media (min-width: 760px) {
  img{
    height: 200px;
  }
}

@media (min-width: 1000px) {
  width: 40rem;

  h3{
    font-size: 2.5rem;
  }

  p{
    font-size: 1.75rem;
  }

  div{
    a{
      font-size: 3rem;
      width: 6rem;
      height: 4rem;
    }
  }
}
`