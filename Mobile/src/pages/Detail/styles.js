import styled from 'styled-components/native';
import Constants from 'expo-constants';
import * as B from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  width: 94%;
  padding-left: 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;/* Constants.statusBarHeight + 20 */

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image`
  
`;

export const Incident = styled.View`
  margin-top: 48px;
  margin-bottom: 16px;
  padding: 24px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secundary};
`;

export const Text = styled.Text`
  margin-top: 24px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.border};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 900;

  line-height: 30px;

  color: ${({ theme }) => theme.colors.text};
`;

export const BoldText = styled.Text`
  font-weight: bold;
`;

export const Value = styled.Text`
  margin-top: 8px;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.border};
`;

export const ContactBox = styled.View`
  margin-bottom: 16px;
  padding: 24px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secundary};
`;

export const Actions = styled.View`
  margin-top: 16px;

  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonText = styled(B.ButtonText)`
  color: #ddd;
  font-size: 15px;
  font-weight: bold;
`;