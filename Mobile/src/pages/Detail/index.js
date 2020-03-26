import React from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'

import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import { SimpleButton, Button } from '../../components/Button';

import { Container, Header, Image, Incident, Text, Title, BoldText, Value, ContactBox, Actions, ButtonText } from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const message = "Olá APAD, estou entrando em contato pois gostaria de ajudar no caso 'Cadelinha' com o valor de R$ 120,00 "

  function navigateBack(){
    navigation.goBack();
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: "Herói do caso: aaa",
      recipients: ['carlos.miguel.oliveira.17@gmail.com'],
      body: message
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5511963938763&text=${message}`);
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <SimpleButton onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041"/>
        </SimpleButton>
      </Header>

      <Incident>
        <Text style={{ marginTop: 0 }}><BoldText>ONG: </BoldText></Text>
        <Value>APAD</Value>

        <Text><BoldText>CASO: </BoldText></Text>
        <Value>cadelinha atropelada</Value>

        <Text><BoldText>VALOR: </BoldText></Text>
        <Value>R$ 120</Value>
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
