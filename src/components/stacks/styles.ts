import styled from "styled-components";

export const Tools = styled.section`
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--box);
  margin: 4rem 5rem 0 2rem;
  padding: 3rem;

  span{
    font-size: 18rem;
  }

  p{
    display: flex;

    font-size: 2rem;
    color: var(--white);
    margin-bottom: 1rem;


    span{
      font-size: 2.5rem;
      color: var(--buttons);
      margin-right: 1.5rem;
    }
  }

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

  .types{
    color: #007acc;
  }
`
