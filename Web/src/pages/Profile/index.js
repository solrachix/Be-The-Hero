import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import api from '../../services/api';

import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import { Container, Header, List } from './styles';

export default function Profile() {
  const themeContext = useContext(ThemeContext).colors;
  const history = useHistory();
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const [ incidents, setIncidents ] = useState([]);

  useEffect(()=>{
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(responce => {
      setIncidents(responce.data)
    })
  }, [ongId]);

  async function handleDeleteIncident(id){
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      alert('Error ao deletar caso, tente novamente.');
    }
  }

  function handleLogout(){
    localStorage.clear();

    history.push('/');
  }
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vindo {ongName}</span>
        
        <Button className="link">
          <Link to="/incidents/new">Cadastrar novo caso</Link>
        </Button>
        <button onClick={handleLogout} className="button" type="button">
          <FiPower size={18} color={themeContext.primary} />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>

      <List>
        {
          incidents.map(incident => {
            return (
              <li key={incident.id}>
                <strong>CASO:</strong>
                <p>{incident.title}</p>

                <strong>DESCRIÇÃO: </strong>
                <p>{incident.description}</p>

                <strong>VALOR: </strong>
                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                <button type="button" onClick={()=> handleDeleteIncident(incident.id)}>
                  <FiTrash2 size={20}  color={themeContext.text} />
                </button>
              </li>
            );
          })
        }
      </List>
    </Container>
  );
}
