import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary };
  color: #fff;
  border: 0;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(90%)
  }
`;
