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
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1000px) {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media (min-width: 1500px) {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
`

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--box);
  margin: 3rem 0.25rem 0 1rem;
  padding: 3rem;

  span{
    font-size: 8rem;
  }

  p{
    display: flex;
    align-items: center;
    font-size: 1.35rem;
    color: var(--white);
    margin-bottom: 1rem;

    span{
      font-size: 2rem;
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

  @media (min-width: 414px) {
    span{
      font-size: 9rem;
    }

    p{
      font-size: 1.875rem;
    
      span{
        font-size: 2.25rem;
      }
    }
  }

  @media (min-width: 760px) {
    height: 30rem;

    span{
      font-size: 10rem;
    }

    p{
      font-size: 2rem;

      span{
        font-size: 3rem;
      }
    }
  }

  @media (min-width: 1000px) {
    height: 35rem;
  
    span{
    font-size: 15rem;
  }

  p{
    font-size: 1.75rem;
    
      span{
        font-size: 3rem;
      }
  }
}
`
