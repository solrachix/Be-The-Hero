import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import { Container, Header, List } from './styles';

export default function Profile() {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vindo APAD</span>
        
        <Button className="link">
          <Link to="/incidents/new">Cadastrar novo caso</Link>
        </Button>
        <button className="button" type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>

      <List>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Casoteste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,000</p>

          <button type="button">
            <FiTrash2 size={20}  color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Casoteste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,000</p>

          <button type="button">
            <FiTrash2 size={20}  color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Casoteste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,000</p>

          <button type="button">
            <FiTrash2 size={20}  color="#a8a8b3"/>
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Casoteste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,000</p>

          <button type="button">
            <FiTrash2 size={20}  color="#a8a8b3"/>
          </button>
        </li>

      </List>
    </Container>
  );
}
