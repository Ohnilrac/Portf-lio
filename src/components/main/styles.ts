import styled from "styled-components";

export const Container = styled.main`
  margin-top: -12rem;
  background-color: var(--gray);

  width: 70%;

  margin-left: auto;
  margin-right: auto;
  padding: 2rem;

  border-radius: 15px;

  section{
    display: flex;
  }

  h1, h2, p{
    color: var(--white);
  }

  h1, h2{
    font-weight: normal;
  }

  h1{
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }

  h2{
    font-size: 2.8rem;
    margin-bottom: 0.75rem;
  }

  p{
    width: 45%;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`