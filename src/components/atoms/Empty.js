import React from 'react';
import styled from 'styled-components';
import { Box } from 'react-feather';

const Content = styled.div`
  border-radius: ${({theme}) => theme.radius};
  box-shadow: ${({theme}) => theme.shadow};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 170px;
`;

const Icon = styled(Box)`
  margin-right: 20px;
`;

const Empty = ({children, ...props}) => <Content {...props}>
  <Icon /> {children}
</Content>;

export default Empty;