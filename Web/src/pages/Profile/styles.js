import styled from 'styled-components';
import { lighten } from 'polished';
export const Container = styled.div`
  width: 100%;
	max-width: 1180px;
	padding: 0 30px;
	margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  height: 60px;
  display: flex;
	align-items: center;

  img{
    height: 100%;
  }

	span {
		font-size: 20px;
    margin-left: 24px;
    font-weight:500;
    color: ${({ theme }) => theme.colors.text };
	}

  .link {
    width: 260px !important;
    height: 100%;
    color: #fff;
    margin-left: auto ;
    margin-top: 0 !important;
  }
  .link a{
    color: #fff;
  }

  .button {
    width: 60px;
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.quarterly };
    background: transparent;
    margin-left: 16px;
  }

  .button , .button svg{
    transition: 0.1s;
  }

  .button:hover {
    background: ${({ theme }) => theme.colors.primary };
    border-color: ${({ theme }) => theme.colors.primary };
  }
  .button:hover svg{
    stroke: #fff;
  }
  @media screen and (max-width: 700px) {
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

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;

  li {
    background: ${({ theme }) => lighten(0.1, theme.colors.secundary) };
    padding: 24px;
    border-radius: 8px;
    position: relative;
  }

  li button {
    background: transparent;
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
  }

  li button:hover {
    opacity: 0.8;
  }

  li strong {
    display: block;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.text };
  }

  li p + strong {
    margin-top: 32px;
  }

  li p {
    color: ${({ theme }) => theme.colors.tertiary };
    line-height: 21px;
    font-size: 16px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);

    li{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;
      list-style: none;
    }
    li p {
      display: flex;
      align-items: center;
    }
  }
`;
