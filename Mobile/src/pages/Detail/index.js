import React from 'react';
import { Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'

import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import { SimpleButton, Button } from '../../components/Button';

import { Container, Header, Image, Incident, Text, Title, BoldText, Value, ContactBox, Actions, ButtonText } from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.Name}, estou entrando em contato pois gostaria de ajudar no caso '${incident.title}' com o valor de ${ Intl.NumberFormat('pt-BR', {     style: 'currency', currency: 'BRL'}).format(incident.value)} `;

  function navigateBack(){
    navigation.goBack();
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return (
    <Container>
      <Header>
        <SimpleButton onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041"/>
        </SimpleButton>

        <Image source={logoImg} />
      </Header>

      <Incident>
        <Text style={{ marginTop: 0 }}><BoldText>ONG: </BoldText></Text>
        <Value>{incident.Name} de {incident.city}/{incident.uf}</Value>

        <Text><BoldText>CASO: </BoldText></Text>
        <Value>{incident.title}</Value>

        <Text><BoldText>DESCRIÇÃO: </BoldText></Text>
        <Value>{incident.description}</Value>

        <Text><BoldText>VALOR: </BoldText></Text>
        <Value>
          {
            Intl
              .NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)
          }
        </Value>
      </Incident>

      <ContactBox>
        <Title>Salve o dia!</Title>
        <Title>Seja o heroi desse caso.</Title>

        <Text>Entre em contato</Text>

        <Actions>
          <Button onPress={sendWhatsapp}>
            <ButtonText>Whatsapp</ButtonText>
          </Button>
          <Button onPress={sendMail}>
            <ButtonText>Email</ButtonText>
          </Button>
        </Actions>
      </ContactBox>
    </Container>
  );
}
