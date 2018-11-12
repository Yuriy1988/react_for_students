import React from 'react';
import styled, { css } from 'styled-components';


const StyledDiv = styled.div`
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props => css`
      background: ${props.backgroundColor};
  `};
`;

function withPriceCategory(WrappedComponent) {
  return (props) => {
    let backgroundColor = 'white';

    if (Number(props.product.price) > 100) {
      backgroundColor = 'green';
    }

    if (Number(props.product.price) > 10000) {
      backgroundColor = 'yellow';
    }

    return (
      <StyledDiv backgroundColor={backgroundColor} >
        <WrappedComponent {...props} />
      </StyledDiv>);
  };
}

export default withPriceCategory;
