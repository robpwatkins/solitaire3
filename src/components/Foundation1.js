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
  const [currentRank, setCurrentRank] = useState(0);

  const handleClick = () => {
    if (props.clickedCard.length > 0) {
      let incomingRank = props.clickedCard[0].rank;
      if (incomingRank !== currentRank + 1) {
        return;
      }
      setCardStack([cardStack, ...props.clickedCard]);
      props.removeCard();
      setCurrentRank(incomingRank);
    } else {
      let cards = cardStack;
      cards.splice(cards.length - 1);
      setCardStack(...cards);
      setCurrentRank(currentRank - 1);
    }
  }

  let topCard = cardStack[cardStack.length - 1];

  return (
    <Foundation1Div onClick={handleClick}>
      {cardStack.length > 0 && (
        <Card {...topCard} />
      )}
    </Foundation1Div>
  )
}

export default Foundation1;