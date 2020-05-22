import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';

const PileDiv = styled.div`
  grid-column: 1 / 2;
  height: 200px;
  border: 3px solid #282c34;
  border-radius: 10px;
`;

const Pile1 = (props) => {
  const [cardStack, setCardStack] = useState(['heyoo']);

  const handleClick = () => {
    console.log(cardStack);
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
    <PileDiv onClick={handleClick}>
      {cardStack.length > 0 && (
        <Card card={cardStack[cardStack.length - 1]} />
      )}
    </PileDiv>
  )
}

export default Pile1;