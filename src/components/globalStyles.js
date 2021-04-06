import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --primary: #203631;
    --secondary: #f49393;
    --bkg: #f5f5f5;
    --font-primary: "Abril Fatface", serif;
    --font-secondary: "Abril Display", serif;
    --paragraph-font: "Laca text", sans-serif;
  }

  h1,
  h2 {
    font-family: var(--font-primary);
    font-weight: 400;
    font-style: normal;
  }

  h3,
  h4 {
    font-family: var(--font-secondary);
  }

  body {
    font-family: var(--paragraph-font)
  }

  .icon {
    transition: transform 0.2s ease-in-out;
  }

  .icon:hover {
    transform: translate(0px, -5px);
  }

  .header-space {
    margin-top: 76px;
  }

  select{
    height: 40px;
    font-size: 16px;
  }

  strong{
    font-weight: bold;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 20px 0;
  }
  h1{
    font-size: 3em;
  }
  h2{
    font-size: 2.5em;
  }
  h3{
    font-size: 2em;
  }
  h4{
    font-size: 1.5em;
  }
  h5{
    font-size: 1em;
  }
  h6{
    font-size: 0.75em;
  }
  ul{
    margin-left: 20px;
    >li{
      list-style: disc;
    }
  }
`;
