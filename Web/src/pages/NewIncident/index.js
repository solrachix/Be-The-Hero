import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import BackLink from '../../components/BackLink';
import Button from '../../components/Button';
import Input, { Textarea } from '../../components/Input';
import { Container, Content, ArrowLeft } from './styles';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logo}/>
          
          <h1>Cadastrar novo caso</h1>
          <p>descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
          
          <BackLink to="/profile">
            <ArrowLeft size={16} color="#e02041"/>
            Voltar para home
          </BackLink>
        </section>

        <form>
          <Input placeholder="Titulo do caso"/>
          <Textarea placeholder="Descrição"/>
          <Input placeholder="whatsapp"/>

          <Input placeholder="Valor em reais"/>
          
          <Button type="submit">Cadstrar</Button>
        </form>
      </Content>
    </Container>
  );
}
