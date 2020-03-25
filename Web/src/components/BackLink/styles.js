import styled from 'styled-components';
import * as RRD from 'react-router-dom';

export const Link = styled(RRD.Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.text };
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover{
    opacity: 0.8;
  }
`;
