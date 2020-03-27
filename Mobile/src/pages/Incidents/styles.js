import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;/* Constants.statusBarHeight + 20 */

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image`
  
`;

export const Text = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.border};
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.border};
`;

export const Title = styled.Text`
  font-size: 30px;

  margin-bottom: 16px;
  margin-top: 48px;

  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;

export const BoldText = styled.Text`
  font-weight: bold;
`;

export const IncidentsList = styled.FlatList`
  margin-top: 32px;
`;

export const Incident = styled.View`
  margin-bottom: 16px;
  padding: 24px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secundary};
`;

export const Value = styled.Text`
  margin-top: 8px;
  margin-bottom: 24px;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.border};
`;