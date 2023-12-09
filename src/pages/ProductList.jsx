import { styled } from 'styled-components';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { Header, MainContainer } from '../styles/styles';
import { motion as m } from 'framer-motion';

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
  row-gap: 40px;
  column-gap: 24px;
  padding-top: 40px;
  flex-wrap: wrap;
`;

export default function ProductList() {
  return (
    <m.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.5 }}
    >
      <MainContainer>
        <Header>
          <p>Product List</p>
          <Link to="/uploadProduct">
            Create Product <span>&gt;</span>
          </Link>
        </Header>
        <SearchBox>
          <img src="/search.png" />
          <input type="text" placeholder="Name,Catalogue,Code" />
        </SearchBox>
        <ProductLists>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductLists>
      </MainContainer>
    </m.div>
  );
}
