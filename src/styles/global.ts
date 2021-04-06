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
  }

  h1 {
    font: 500 48px Poppins, sans-serif;
  }

  h2 {
    font: 500 36px Poppins, sans-serif;
  }

  h3 {
    font: 400 20px Poppins, sans-serif;
  }
`;
