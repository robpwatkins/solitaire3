import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Foundation3Div = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 6 / 7;
  border: 3px solid #345c7d;
  border-radius: 10px;
`;

const Foundation3 = (props) => {
  const [cardStack, setCardStack] = useState([]);

  return (
    <Foundation3Div onClick={() => setCardStack([...props.clickedCard])}>
      {cardStack.length > 0 && <Card card={cardStack[0]} />}
    </Foundation3Div>
  )
}

export default Foundation3;