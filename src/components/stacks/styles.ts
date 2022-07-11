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
  justify-content: space-around;

  @media (max-width: 415px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    font-size: 12rem;
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

  @media (max-width: 415px) {
    margin: 3rem 1rem 0 1rem;
    padding: 3rem;
    
    span{
      font-size: 6rem;
    }

    p{
      font-size: 1.2rem;
    
      span{
        font-size: 1.5rem;
      }
    }
  }
`
