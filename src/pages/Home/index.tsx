import React from 'react';

import { Container } from './styles';
import building from '../../assets/sherlock.png';

const Home: React.FC = () => {
  return (
    <Container>
        <img src={building} alt="People are building something" />

        <h3>Ops, estamos em obras! Em breve!</h3>
    </Container>
  );
};

export default Home;
