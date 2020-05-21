import React from 'react';
import styled from 'styled-components';

const Foundation1Div = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 5 / 6;
  border: 3px solid #545c6d;
  border-radius: 9px;
`;

const Foundation1 = () => {
  return (
    <Foundation1Div />
  )
}

export default Foundation1;