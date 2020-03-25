import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  section.form {
    width: 100%;
    max-width: 1120px;
    margin-right: 30px;
  }
  section.form form {
    margin-top: 100px;
  }
  section.form form h1{
    font-size: 32px;
    margin-right: 30px;
  }
  section.form form a{
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }
  section.form form a:hover{
    opacity: 0.8;
  }
`;

export const LogIn = styled(FiLogIn)`
  margin-right: 15px;
`;
