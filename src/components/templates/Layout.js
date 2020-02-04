import React from 'react';
import Navigation from '../molecules/Navigation';
import styled from 'styled-components';

const Container = styled.div`
  width: 960px;
  position: relative;
  top: 20px;
  margin: 0 auto;
  padding: 35px 30px;
  border-radius: ${({theme}) => theme.radius};
  box-shadow: ${({theme}) => theme.shadow};
`;

const Layout = ({children}) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default Layout;