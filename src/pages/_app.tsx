import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Pedro Yamaguchi</title>
    </Head>

    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
