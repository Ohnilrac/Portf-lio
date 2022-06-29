import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root{
    //Colors
    --black: #060608;
    --green: #00d04c;
    --white: #fff;
    --gray: #556270;
    --gray-2: #e6e6e6;
    --gray-3: #646464;
    --blue-light: #4ecdc4;
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

  body{
    background: var(--gray-2);
  }

  ul{
    list-style: none;
  }
`