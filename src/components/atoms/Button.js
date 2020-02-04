import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: inherit;
  position: relative;
  background: inherit;
  outline: none;
  border: none;
  box-shadow: ${({theme}) => theme.shadow};
  border-radius: ${({theme}) => theme.radius};
  cursor: pointer;
  text-transform: uppercase;
  padding: 0.5rem 0.75rem;

  &:hover,
  &:focus {
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border-radius: ${({theme}) => theme.radius};
      box-shadow: ${({theme}) => `2px 2px 2px 0px ${theme.dark} inset, -2px -2px 2px 0px ${theme.white} inset`};
    }
  }
`;

const Button = ({children}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};

export default Button;