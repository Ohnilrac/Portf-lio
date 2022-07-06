import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--box);

  width: 80%;
  margin: 45rem auto 0;
  padding: 2rem;
  border-radius: 15px;

  section{
    display: flex;
  }

  h1, h2, p{
    color: var(--white);
  }

  h1, h2{
    font-weight: bold;
  }

  h2{
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }

  p{
    width: 45%;
    font-size: 1.875rem;
    margin-bottom: 1rem;
  }
`

export const Icons = styled.ul`
  font-size: 8rem;

  .html{
    color: #f16524;
  }
  
  .css{
    color: #00a1df;
  }

  .js{
    color: #e6b101;
  }

  .react{
    color: #61dafb;
  }
`