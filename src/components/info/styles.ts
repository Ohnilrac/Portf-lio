import styled from 'styled-components'

export const Container = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1000px) {
    display: flex;
    gap: 3rem;
  }

  @media (min-width: 1500px) {
    width: 140rem;
  }
`
export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  margin-top: 15rem;
  padding: 0 2rem 3rem;
  background: var(--box);

  @media (min-width: 1000px) {
    width: 35rem;
  }

  @media (min-width: 1500px) {
    /* min-height: 2px; */
  }
`

export const Profile = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 220px;
    height: 220px;

    margin-top: -5rem;
    border-radius: 10px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;

    li {
      font-size: 2.785rem;
      margin: 0 1rem;

      a {
        color: var(--buttons);
      }
    }

    @media (min-width: 414px) {
      li {
        font-size: 3.25rem;
      }
    }
  }
`

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--white);

  h3 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.35rem;
  }

  @media (min-width: 414px) {
    h3 {
      font-size: 2.875rem;
    }

    p {
      font-size: 1.75rem;
    }
  }

  @media (min-width: 1000px) {
    h3 {
      font-size: 2.5rem;
    }
  }
`

export const Links = styled.div`
  display: flex;
  margin-top: 2rem;
  border-radius: 8px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    font-weight: bold;
    color: var(--white);
    padding: 0.5rem;
    transition: color 0.4s;

    &:nth-child(2)::before,
    :nth-child(3)::before {
      content: '';
      width: 0.15rem;
      height: 2rem;
      background: var(--buttons);
      margin-right: 0.875rem;
    }

    &:hover {
      color: var(--buttons);
    }
  }

  @media (min-width: 414px) {
    a {
      font-size: 2.2rem;
    }
  }

  @media (min-width: 1000px) {
    a {
      font-size: 2.15rem;
    }
  }
`

export const About = styled.section`
  margin-top: 5rem;
  background: var(--box);
  border-radius: 10px;
  padding: 1rem;

  h2 {
    font-size: 3rem;
    color: var(--white);
  }

  p {
    color: var(--white);
    font-size: 1.35rem;
    margin-top: 1rem;

    text-align: justify;
  }

  @media (min-width: 414px) {
    h2 {
      font-size: 3.25rem;
    }

    p {
      font-size: 1.75rem;
    }
  }

  @media (min-width: 1000px) {
    /* width: 50rem; */
    margin-top: 15rem;
  }
`

export const Icons = styled.ul`
  display: flex;
  align-self: center;
  justify-content: center;

  li {
    margin: 2rem 1rem 0;
    font-size: 3.5rem;
  }

  .html {
    color: #f16524;
  }

  .css {
    color: #00a1df;
  }

  .js {
    color: #e6b101;
  }

  .react {
    color: #61dafb;
  }

  @media (min-width: 414px) {
    li {
      font-size: 4rem;
    }
  }
  @media (min-width: 760px) {
    li {
      font-size: 5.5rem;
    }
  }
  @media (min-width: 1000px) {
    li{
      margin-top: 7rem;
      font-size: 7rem;
    }
  }
  @media (min-width: 1500px) {
    
  }
`
