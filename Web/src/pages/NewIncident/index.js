import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

import Alert from '../../components/Alert';
import BackLink from '../../components/BackLink';
import Button from '../../components/Button';
import Input, { Textarea } from '../../components/Input';
import { Container, Content, ArrowLeft } from './styles';

export default function NewIncident() {
  const history = useHistory();
  const ongId = localStorage.getItem('ongId');
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ value, setValue ] = useState("");

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    }
    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId
        }
      });

      Alert({
        type: 'success',
        title: 'Sucesso',
        content: 'Incidente criado com sucesso!'
      });

      history.push('/profile')
    } catch (error) {
      Alert({
        title: 'Error',
        content: 'Erro no cadastro tente novamente mais tarde!'
      });
    }
  }
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

        <form onSubmit={handleNewIncident}>
          <Input 
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}
