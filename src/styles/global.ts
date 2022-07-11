import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root{
    //Colors
    --background: #121214;
    --white: #D6D6DB;
    --green: #04d361;
    --line: #8257e6;
    --box: #202024;
    --icons: #A8A8B3;
    --buttons: #8257E5;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html{
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body{
    background: var(--background);
  }

  ul{
    list-style: none;
  }
`