import React, { useState, useEffect } from 'react';
import { Feather } from'@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { SimpleButton, ButtonText } from '../../components/Button';
import { 
  Container, 
  Header, 
  Image, 
  Text, 
  Title, 
  BoldText, 
  Description, 
  IncidentsList, 
  Incident,
  Value
 } from './styles';

export default function Incidents() {
  const [ incidents, setIncidents ] = useState([]);
  const [ total, setTotal ] = useState(0);
  const [ page, setPage ] = useState(1);
  const [ loading, setLoading ] = useState(false);

  const navigation = useNavigation();

  function navigateToDetails(incident){
    navigation.navigate('Detail', { incident });
  }

  async function loadIncidents(){
    if(loading){
      return
    }

    if(total > 0 && incidents.length === total){
      return;
    }

    setLoading(true);
    const responce = await api.get('incidents', {
      params: { page }
    });

    setIncidents([ ...incidents, ...responce.data]);
    setTotal(responce.headers['x-total-count']);
    setPage(page + 1);

    setLoading(false)
  }
  useEffect(()=>{
    loadIncidents()
  }, [])
  return (
    <Container>
      <Header>
        <Image source={logoImg}/>
        <Text>
          Total de <BoldText>{total} casos</BoldText>.
        </Text>
      </Header>

      <Title>Bem vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentsList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThhreshold={0.2}
        renderItem={({ item: incident }) => (
          <Incident>
            <Text><BoldText>ONG: </BoldText></Text>
            <Value>{incident.Name}</Value>

            <Text><BoldText>CASO: </BoldText></Text>
            <Value>{incident.title}</Value>

            <Text><BoldText>VALOR: </BoldText></Text>
            <Value>{
              Intl
                .NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(incident.value)
            }</Value>

            <SimpleButton onPress={() => navigateToDetails(incident)}>
              <ButtonText>Ver mais detalhes</ButtonText>
              <Feather name="arrow-right" size={16} color="#e02041"/>
            </SimpleButton>
          </Incident>
        )}
      />
        
    </Container>
  );
}
