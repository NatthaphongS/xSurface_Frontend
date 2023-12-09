import { useRef } from 'react';
import { toast } from 'react-toastify';
import { styled } from 'styled-components';

const UploadArea = styled.div`
  height: 350px;
  width: 100%;
  border: 1px dashed #d9d9d9;
  border-radius: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-flow: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  position: relative;
  div {
    font-size: 14px;
    color: #6c6c70;
  }
  span {
    font-size: 12px;
    font-weight: 300;
    color: #6c6c70;
  }
  &:after {
    content: '${({ $countImage }) => `Image upload (${$countImage}/6)`}';
    position: absolute;
    bottom: -22px;
    width: 100%;
    font-weight: 300;
    display: flex;
    justify-content: end;
    font-size: 12px;
    color: #6c6c70;
  }
`;

const ClickUpload = styled.p`
  display: inline;
  color: #005fcc;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  max-width: 340px;
  gap: 5px;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

export default function UploadImage({ input, setInput }) {
  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 6) {
      return toast.error('Over maximum image', { icon: false });
    }
    setInput({ ...input, images: e.dataTransfer.files });
  };
  return (
    <UploadArea
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      $countImage={Array.from(input.images).length}
    >
      {Array.from(input.images).length > 0 ? (
        <>
          <ImageContainer>
            {Array.from(input.images).map((el, index) => (
              <img key={index} src={URL.createObjectURL(el)} />
            ))}
          </ImageContainer>
        </>
      ) : (
        <>
          <img src="/upload.png" />
        </>
      )}
      <div>
        Drag & Drop or{' '}
        <ClickUpload onClick={() => inputRef.current.click()}>
          Choose file
        </ClickUpload>{' '}
        to upload
      </div>
      <span>JPG. or PNG Maximum file size 50MB.</span>

      <input
        type="file"
        name="images"
        multiple
        onChange={(e) => {
          if (e.target.files.length > 6) {
            return toast.error('Over maximum image', { icon: false });
          }
          setInput({ ...input, [e.target.name]: e.target.files });
        }}
        hidden
        ref={inputRef}
      />
    </UploadArea>
  );
}
