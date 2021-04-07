import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.light.background};
    color: ${props => props.theme.colors.light.text};
    font: 400 16px Poppins, sans-serif;

    > div {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
  }

  h1 {
    font: 500 48px Poppins, sans-serif;
  }

  h2 {
    font: 400 36px Poppins, sans-serif;
  }

  h3 {
    font: 400 24px Poppins, sans-serif;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.light.text};

    :hover {
      transform: color 0.4s;
      color: #8a05be;
    }
  }
`;
