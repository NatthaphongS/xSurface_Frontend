import { styled } from 'styled-components';
import ProductCard from '../components/ProductCard';

const MainContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const Header = styled.div`
  font-size: 32px;
  font-weight: 600;
`;
const SearchBox = styled.div`
  height: 56px;
  border: 1px solid #bcbcc0;
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 0 25px;
  gap: 8px;
  input {
    border: none;
    outline: none;
    font-size: 16px;
    height: 100%;
    ::placeholder {
      color: #bcbcc0;
    }
    width: 100%;
  }
`;

const ProductLists = styled.div`
  display: flex;
  row-gap: 24px;
  column-gap: 40px;
`;

export default function ProductList() {
  return (
    <MainContainer>
      <Header>Product List</Header>
      <SearchBox>
        <img src="/search.png" />
        <input type="text" placeholder="Name,Catalogue,Code" />
      </SearchBox>
      <ProductLists>
        <ProductCard />
      </ProductLists>
    </MainContainer>
  );
}
