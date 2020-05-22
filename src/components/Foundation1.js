import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Foundation1Div = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 4 / 5;
  border: 3px solid #345c7d;
  border-radius: 10px;
`;

const Foundation1 = (props) => {
  const [cardStack, setCardStack] = useState([]);

  return (
    <Foundation1Div onClick={() => setCardStack([...props.clickedCard])}>
      {cardStack.length > 0 && <Card card={cardStack} />}
    </Foundation1Div>
  )
}

export default Foundation1;