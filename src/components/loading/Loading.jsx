import * as loadingData from './loading.json';
import Lottie from 'react-lottie';
import styled from 'styled-components';

const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Loading() {
  return (
    <BackGround>
      <Lottie
        options={defaultOptions}
        height={'60vw'}
        width={'60vw'}
        preserveAspectRatio={'square'}
      />
    </BackGround>
  );
}
