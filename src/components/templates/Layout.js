import React from 'react';
import styled from 'styled-components';

// import Navigation from '../molecules/Navigation';

const Container = styled.div`
  max-width: 960px;
  position: relative;
  top: 20px;
  margin: 0 auto;
  padding: 35px 30px;
  border-radius: ${({theme}) => theme.radius};
  box-shadow: ${({theme}) => theme.shadow};
`;

const Layout = ({children, ...props}) => {
  return (
    <Container {...props}>
      {/* <Navigation /> */}
      {children}
    </Container>
  );
};

export default Layout;