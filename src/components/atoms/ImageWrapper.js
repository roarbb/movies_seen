import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: ${({theme}) => theme.radius};
  overflow: hidden;
  transition: height .2s;

  &:hover {
    height: 100%;
  }

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ImageWrapper = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default ImageWrapper;