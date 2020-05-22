import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Foundation4Div = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 7 / 8;
  border: 3px solid #345c7d;
  border-radius: 10px;
`;

const Foundation4 = (props) => {
  const [cardStack, setCardStack] = useState([]);

  return (
    <Foundation4Div onClick={() => setCardStack([...props.clickedCard])}>
      {cardStack.length > 0 && <Card card={cardStack} />}
    </Foundation4Div>
  )
}

export default Foundation4;