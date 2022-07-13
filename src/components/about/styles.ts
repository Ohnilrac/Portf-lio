import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--box);
  width: 80%;
  margin: 15rem auto 0;
  padding: 2rem;
  border-radius: 15px;

  section{
    display: flex;
    flex-direction: column;

    h2, p{
      color: var(--white);
    }
    
    h2{
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
    }

    p{
      width: 100%;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 414px) {
    section{

      h2{
        font-size: 2.25rem;
      }

      p{
        font-size: 1.55rem;
      }
    }
  }

  @media (min-width: 760px) {
    margin-top: 25rem;

    section{

      h2{
        font-size: 3rem;
      }

      p{
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 1000px) {
  margin-top: 30rem;

  section{

    h2{
        font-size: 3.875rem;
    }

    p{
      font-size: 2.1rem;
    }
  }
}

@media (min-width: 1500px) {
    section{
      flex-direction: row;
      justify-content: space-between;

      div{
        p{
          width: 70%;
        }
      }
    }
  }
`

export const Icons = styled.ul`
  display: flex;
  align-self: center;
  
  li{
    margin: 2rem 1rem 0;
    font-size: 3.5rem;
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

  @media (min-width: 414px) {
    li{
      font-size: 4rem;
    }
  }
  @media (min-width: 760px) {
    li{
      font-size: 5.5rem;
    }
  }
  @media (min-width: 1000px) {
    li{
      font-size: 7rem;
    }
  }
  @media (min-width: 1500px) {
    flex-direction: column;
  }
`