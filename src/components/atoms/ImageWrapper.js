import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 150px;
  height: ${({expanded}) => !!expanded ? `100%` : `150px`};
  border-radius: ${({theme}) => theme.radius};
  overflow: hidden;
  transition: height .2s;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ImageWrapper = ({children, expanded = false}) => {
  return (
    <Wrapper expanded={expanded}>
      {children}
    </Wrapper>
  );
};

export default ImageWrapper;