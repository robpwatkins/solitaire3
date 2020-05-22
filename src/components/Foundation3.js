import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';

const Foundation3Div = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 6 / 7;
  border: 3px solid #345c7d;
  border-radius: 10px;
`;

const Foundation3 = (props) => {
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

  let topCard = cardStack[cardStack.length - 1];

  return (
    <Foundation3Div onClick={handleClick}>
      {cardStack.length > 0 && (
        <Card {...topCard} />
      )}
    </Foundation3Div>
  )
}

export default Foundation3;