import React from 'react';
import { Feather } from'@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  function navigateToDetails(){
    navigation.navigate('Detail');
  }
  return (
    <Container>
      <Header>
        <Image source={logoImg}/>
        <Text>
          Total de <BoldText>0 casos</BoldText>.
        </Text>
      </Header>

      <Title>Bem vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentsList
        data={[1, 2, 3]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={()=>(
          <Incident>
            <Text><BoldText>ONG: </BoldText></Text>
            <Value>APAD</Value>

            <Text><BoldText>CASO: </BoldText></Text>
            <Value>cadelinha atropelada</Value>

            <Text><BoldText>VALOR: </BoldText></Text>
            <Value>R$ 120</Value>

            <SimpleButton onPress={navigateToDetails}>
              <ButtonText>Ver mais detalhes</ButtonText>
              <Feather name="arrow-right" size={16} color="#e02041"/>
            </SimpleButton>
          </Incident>
        )}
      />
        
    </Container>
  );
}
