import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #D38003;
        --white-color: #FFFFFF;
        --black-color: #000000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        border: none;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        font-family: 'Courier New', Courier, monospace;
    }
    body {
        color: var(--black-color);
        background-color: var(--white-color);
        font-style: normal;
    }
    p,li,span {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.9rem;
    }
    a {
      text-decoration: none;
    }
    h1{
      font-size: 1.6rem;
    }
`;

export default GlobalStyle;
