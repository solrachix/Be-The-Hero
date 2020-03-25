import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  .link {
    width: 260px !important;
    margin-left: auto !important;
    margin-top: 0 !important;
  }

  .button {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
  }

  .button:hover {
    border-color: #999;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;
  }

  li button {
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
    color: #41414d;
  }

  li p + strong {
    margin-top: 32px;
  }

  li p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }
`;
