import React from 'react';
import { Link } from 'react-router-dom';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import BackLink from '../../components/BackLink';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, LogIn } from './styles';

export default function Logon() {
  return (
    <Container className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form>
          <h1>Faça seu Logon</h1>

          <Input placeholder="Sua Id"/>
          <Button type="submit">Entrar</Button>

          <BackLink to="/register">
            <LogIn size={16} color="#e02041"/>
            Não tenho cadastro
          </BackLink>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </Container>
  );
}
