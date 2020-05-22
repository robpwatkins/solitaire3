import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Foundation2Div = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 5 / 6;
  border: 3px solid #345c7d;
  border-radius: 10px;
`;

const Foundation2 = (props) => {
  const [cardStack, setCardStack] = useState([]);

  return (
    <Foundation2Div onClick={() => setCardStack([...props.clickedCard])}>
      {cardStack.length > 0 && <Card card={cardStack} />}
    </Foundation2Div>
  )
}

export default Foundation2;