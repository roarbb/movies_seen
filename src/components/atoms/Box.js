import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  padding: 10px 20px;
  border-radius: ${({theme}) => theme.radius};
  box-shadow: ${({theme}) => theme.shadow};
`;

const Box = ({children, ...props}) => <StyledBox {...props}>{children}</StyledBox>;

export default Box;