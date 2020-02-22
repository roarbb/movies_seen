import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 960px;
  position: relative;
  top: 20px;
  margin: 0 auto;
  padding: 35px 30px;
`;

const Blank = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Blank;