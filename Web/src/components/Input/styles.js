import styled from 'styled-components';
import { rgba, darken } from 'polished';

export const Input = styled.input`
  width: 100%;
  height: 60px;

  color: ${({ theme }) => theme.colors.text };

  border: 1px solid ${({ theme }) => darken(0.05, theme.colors.secundary) };
  background: ${({ theme }) => rgba(theme.colors.secundary, 0.8) };
  border-radius: 8px;
  
  padding: 0 24px;
`;

export const TxtArea = styled.textarea`
  width: 100%;
  min-height: 140px;

  color: ${({ theme }) => theme.colors.text };

  background: ${({ theme }) => rgba(theme.colors.secundary, 0.8) };
  border: 1px solid ${({ theme }) => darken(0.05, theme.colors.secundary) };
  border-radius: 8px;

  margin-top: 8px;
  padding: 16px 24px;
  line-height: 24px;
  resize: vertical;
`;