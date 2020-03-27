import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Content = styled.div`
  width: 98%;
  padding: 96px;
  background: ${({ theme }) => theme.colors.secundary };
  box-shadow: 0 0 100px ${({ theme }) => darken(0.1, theme.colors.secundary) };
  border-radius: 8px;

  display: flex;
  align-items: space-between;
  justify-content: center;

  section {
    width: 100%;
    max-width: 380px;
  }
  section h1{
    margin: 64px 0 32px;
    font-size: 32px;
  }
  section p{
    font-size: 18px;
    color: ${({ theme }) => theme.colors.tertiary };
    line-height: 32px;
  }

  form{
    width: 100%;
    max-width: 450px;
  }
  form input{
    margin-top: 8px;
  }
  form .input-group{
    display: flex;

  }
  form .input-group input + input{
    margin-left: 8px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin-top: 20%;
    .button {
      margin-top: 5%;
    }
    .link {
      margin-left: 0px;
    }
  }
`;

export const ArrowLeft = styled(FiArrowLeft)`
  
`;
