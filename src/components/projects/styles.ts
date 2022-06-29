import styled from "styled-components";

export const Container = styled.article`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
    height: 300px;
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

    a{
      margin: 0 auto;
      font-size: 3.5rem;
    }
  }
`