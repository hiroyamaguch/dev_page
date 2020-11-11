import React from 'react';
import Head from 'next/head';

import CarroLogo from '../assets/carro.svg';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Home Page</title>
    </Head>

    <main>
      <CarroLogo />
      <h1>Hello World</h1>
    </main>
  </Container>
);

export default Home;
