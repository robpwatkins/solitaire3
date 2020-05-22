import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';

const Foundation1Div = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 4 / 5;
  border: 3px solid #345c7d;
  border-radius: 10px;
`;

const Foundation1 = (props) => {
  const [cardStack, setCardStack] = useState([]);

  const handleClick = () => {
    if (props.clickedCard.length > 0) {
      setCardStack([cardStack, ...props.clickedCard]);
      props.removeCard();
    } else {
      let cards = cardStack;
      cards.splice(0);
      setCardStack([...cards]);
    }
  }

  return (
    <Foundation1Div onClick={handleClick}>
      {cardStack.length > 0 && (
        <Card card={cardStack[cardStack.length - 1]} />
      )}
    </Foundation1Div>
  )
}

export default Foundation1;