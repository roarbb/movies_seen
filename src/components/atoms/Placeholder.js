import React from 'react';
import styled from 'styled-components';
import { Film } from 'react-feather';

const Content = styled.div`
  border-radius: ${({theme}) => theme.radius};
  background: ${({theme}) => theme.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({height}) => `${height}px`};
  width: ${({width}) => `${width}px`};
  flex-direction: column;
`;

const Icon = styled(Film)`
  display: block;
  margin-bottom: 5px;
`;

const Placeholder = ({children, width = 150, height = 150, ...props}) => (
  <Content width={width} height={height} {...props}>
    <Icon />
    No Image
  </Content>
);

export default Placeholder;