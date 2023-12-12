import { Link } from 'react-router-dom';
import { Header, MainContainer } from '../styles/styles';
import { motion as m } from 'framer-motion';
import { styled } from 'styled-components';
import { useState } from 'react';
import UploadImage from '../components/UploadImage';
import axios from '../config/axios';
import { toast } from 'react-toastify';

const UploadFormContainer = styled.form`
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
  flex-wrap: wrap;
  justify-content: center;
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

  const handelSubmitForm = async (e) => {
    e.preventDefault();
    const id = toast.loading(`${input.name} is uploading`);
    try {
      if (
        input.name == '' ||
        input.code == '' ||
        input.price == '' ||
        Array.from(input.images).length == 0
      ) {
        return toast.error('Please provide all data');
      }
      const formData = new FormData();
      input.price = +input.price;
      input.images = Array.from(input.images);
      console.log(input);
      input.price = +input.price;
      input.images.forEach((image) => {
        formData.append('images[]', image);
      });

      for (let key in input) {
        if (input[key]) {
          formData.append(key, input[key]);
        }
      }
      const res = await axios.post('/product/create', formData);
      toast.update(id, {
        render: `${input.name} Upload success`,
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      });
      console.log(res);
      setInput({
        images: {},
        name: '',
        code: '',
        price: '',
      });
    } catch (error) {
      console.log(error);
      toast.update(id, {
        render: `${input.name} Upload fail`,
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
    }
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
        <UploadFormContainer onSubmit={handelSubmitForm}>
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
            <Button
              type="button"
              onClick={() =>
                setInput({
                  images: {},
                  name: '',
                  code: '',
                  price: '',
                })
              }
              $primary={false}
            >
              ยกเลิก
            </Button>
            <Button $primary={true}>ยืนยัน</Button>
          </ButtonContainer>
        </UploadFormContainer>
      </MainContainer>
    </m.div>
  );
}
