import styled from 'styled-components/native';

export const SimpleButtonElemet = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonElement = styled.TouchableOpacity`
  height: 50px;
  width: 48%;

  justify-content: center;
  align-items: center;
  
  background: #e02041;
  border-radius: 8px;
`;

export const Text = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;