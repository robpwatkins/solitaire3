import React from 'react';
import styled from 'styled-components';

const Foundation1Div = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 6 / 7;
  border: 3px solid #345c7d;
  border-radius: 10px;
`;

const Foundation1 = () => {
  return (
    <Foundation1Div />
  )
}

export default Foundation1;