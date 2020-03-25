import styled from 'styled-components';
import { rgba, darken } from 'polished';
import { FiLogIn } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
	max-width: 1120px;
	height: 100vh;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;

  section.form {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
  }
  section.form form {
    margin-top: 100px;
  }
  section.form form h1{
    font-size: 32px;
    margin-bottom: 32px;
  }
  
  @media screen and (max-width: 1000px) {
	  justify-content: center;
    section.form {
      position: absolute;
      margin: 0 auto;
      padding: 15px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      box-shadow: ${({ theme }) => theme.title == 'Dark' ? `0 0 50px ${darken(0.1, theme.colors.secundary)}` : null };
      background: ${({ theme }) => rgba(theme.colors.secundary, 0.5) };
      border-radius: 15px;
    }
    section.form form {
      margin-top: 50px;
    }
  }
`;

export const LogIn = styled(FiLogIn)`
  margin-right: 15px;
`;
