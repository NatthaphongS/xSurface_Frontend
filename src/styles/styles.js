import { styled } from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1440px;
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

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: fit-content;
  gap: 20px;
  margin: ${({ $small }) => ($small ? '20px auto' : '48px auto')};
`;

export const Button = styled.button`
  color: ${({ $primary }) => ($primary ? 'white' : '#E13B30')};
  background-color: ${({ $primary }) => ($primary ? '#E13B30' : 'white')};
  padding: ${({ $small }) => ($small ? '10px 30px' : '16px 72px')};
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 24px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  &:active {
    scale: 0.95;
  }
`;
