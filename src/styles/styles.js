import { styled } from 'styled-components';

export const MainContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;

export const Header = styled.div`
  padding: 50px 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 32px;
    font-weight: 600;
  }
  a {
    display: flex;
    align-items: center;
    gap: 3px;
    color: gray;
    text-decoration: none;
    font-size: 20px;
    &:hover {
      cursor: pointer;
      color: black;
    }
    span {
      font-size: 30px;
    }
  }
`;
