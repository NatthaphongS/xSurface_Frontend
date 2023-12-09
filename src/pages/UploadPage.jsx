import { Link } from 'react-router-dom';
import { Header, MainContainer } from '../styles/styles';
import { motion as m } from 'framer-motion';
import { styled } from 'styled-components';
import { useState } from 'react';
import UploadImage from '../components/UploadImage';

const UploadFormContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  label {
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
  }
  input {
    height: 56px;
    width: 100%;
    border-radius: 24px;
    font-size: 16px;
    border: 1px solid #d9d9d9;
    padding: 0 24px;
    margin-bottom: 24px;
    ::placeholder {
      color: #d9d9d9;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 20px;
  margin: 48px auto;
`;

const Button = styled.button`
  color: ${({ $primary }) => ($primary ? 'white' : '#E13B30')};
  background-color: ${({ $primary }) => ($primary ? '#E13B30' : 'white')};
  padding: 16px 72px;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 24px;
  cursor: pointer;
`;

export default function UploadPage() {
  const [input, setInput] = useState({
    images: {},
    name: '',
    code: '',
    price: '',
  });
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <m.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.5 }}
    >
      <MainContainer>
        <Header>
          <p>Upload Product</p>
          <Link to="/">
            Product List <span>&gt;</span>
          </Link>
        </Header>
        <UploadFormContainer>
          <label>Upload image</label>
          <UploadImage input={input} setInput={setInput} />
          <label>Product name</label>
          <input
            placeholder="Product name"
            name="name"
            onChange={handleChangeInput}
            value={input.name}
          />
          <label>Code</label>
          <input
            placeholder="Code"
            name="code"
            onChange={handleChangeInput}
            value={input.code}
          />
          <label>Price</label>
          <input
            placeholder="฿1,000"
            name="price"
            onChange={handleChangeInput}
            value={input.price}
          />
          <ButtonContainer>
            <Button $primary={false}>ยกเลิก</Button>
            <Button $primary={true}>ยืนยัน</Button>
          </ButtonContainer>
        </UploadFormContainer>
      </MainContainer>
    </m.div>
  );
}
