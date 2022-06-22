import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root{
    //Colors
    --black: #060608;
    --green: #00d04c;
    --white: #fff;
    --gray: #556270;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html{
    font-size: 62.5%;
  }

  ul{
    list-style: none;
  }
`