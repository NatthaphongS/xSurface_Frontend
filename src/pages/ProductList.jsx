import { styled } from 'styled-components';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { Header, MainContainer } from '../styles/styles';
import { motion as m } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/loading/Loading';

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
  const [products, setProducts] = useState([]);
  const [showProduct, setShowProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    axios
      .get('/product')
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    let cloneProduct = [...products];
    if (searchValue) {
      cloneProduct = cloneProduct.filter((el) => {
        if (
          el.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          el.code.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }
    setShowProduct(cloneProduct);
  }, [searchValue]);

  const handelSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // console.log(isLoading);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <MainContainer>
        <Header>
          <p>Product List</p>
          <Link to="/uploadProduct">
            Create Product <span>&gt;</span>
          </Link>
        </Header>
        <SearchBox>
          <img src="/search.png" />
          <input
            type="text"
            placeholder="Name,Catalogue,Code"
            value={searchValue}
            onChange={handelSearch}
          />
        </SearchBox>
        <ProductLists>
          {showProduct.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ProductLists>
      </MainContainer>
    </>
  );
}
