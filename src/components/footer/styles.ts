import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  margin-top: 10rem;
  padding: 4rem 0;
  background: var(--box);
`

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
    font-size: 1.56rem;
    color: var(--white);

    span{
      font-size: 1.75rem;
      color: #61dafb;
    }
  }

  ul{
    display: flex;
    align-self: center;
    justify-content: center;
    margin-top: 3rem;

    li{
      margin-left: 3rem;
      
      a{
        display: inline-block;
        color: var(--white);
        font-size: 2.5rem;
        transition: 0.5s;

        &:hover{
          color: var(--buttons);
          transform: translateY(-7px);
        }
      }
    }
  }

  @media (min-width: 760px) {
    h3{
      font-size: 2rem;

      span{
        font-size: 2rem;
      }
    }

    ul{
      li{
        a{
          font-size: 2.875rem;
        }
      }
    }
  }

  @media (min-width: 1000px) {
  h3{
    font-size: 2rem;
    
    span{
      font-size: 1.75rem;
    }
  }

  ul{
    li{
      a{
        font-size: 2.5rem;
      }
    }
  }
}
`
