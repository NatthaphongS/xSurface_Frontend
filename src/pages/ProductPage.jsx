import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  MainContainer,
  Header,
  ButtonContainer,
  Button,
} from '../styles/styles';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Loading from '../components/loading/Loading';
import axios from '../config/axios';

const ProductContainer = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
`;

const LeftBox = styled.div`
  flex: 3 0;
  min-width: 300px;
  display: flex;
  padding-bottom: 20px;
`;
const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 10%;
  margin-right: 10px;
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    cursor: pointer;
  }
`;
const ImageHero = styled.img`
  width: 80%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const RightBox = styled.div`
  flex: 2 1;
  min-width: 300px;
  p:nth-child(1) {
    font-size: 25px;
    font-weight: 600;
  }
  p:nth-child(2) {
    color: gray;
    padding-bottom: 10px;
  }
  p:nth-child(3) {
    font-size: 20px;
    font-weight: 600;
  }
  p:nth-child(4) {
    font-size: 16px;
    text-overflow: clip;
  }
  p:nth-child(5) {
    font-size: 20px;
    font-weight: 600;
    color: #e13b30;
    padding-top: 20px;
  }
`;

export default function ProductPage() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`product/${id}`)
      .then((res) => {
        setProduct(res.data.product);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        navigate('/');
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <MainContainer>
      <Header>
        <Link to="/">
          <span>&lt;</span>Product Lists
        </Link>
      </Header>
      <ProductContainer>
        <LeftBox>
          <ImageList>
            {product.images.map((el, index) => (
              <img
                key={index}
                src={el}
                onMouseEnter={() => setImageIndex(index)}
              />
            ))}
          </ImageList>
          <ImageHero src={product.images[imageIndex]} />
        </LeftBox>
        <RightBox>
          <p>{product.name}</p>
          <p>{product.code}</p>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            sequi quaerat nostrum modi voluptatum, non sunt aspernatur magni
            illo eveniet mollitia eaque nesciunt minus itaque veritatis, harum
            et cumque quidem.
          </p>
          <p>
            Price : ฿
            {new Intl.NumberFormat().format(product.price.$numberDecimal)}
          </p>
          <ButtonContainer $small={true}>
            <Button $primary={true} $small={true}>
              Order now
            </Button>
            <Button $small={true}>Add to cart</Button>
          </ButtonContainer>
        </RightBox>
      </ProductContainer>
    </MainContainer>
  );
}
