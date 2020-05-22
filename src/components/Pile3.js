import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';

const PileDiv = styled.div`
  grid-column: 3 / 4;
  height: 200px;
  border: 3px solid #282c34;
  border-radius: 10px;
`;

const Pile3 = (props) => {
  const [cardStack, setCardStack] = useState([
    {
      rank: 'Ace',
      suit: 'Diamonds!'
    }
  ]);

  const handleClick = () => {
    let cards = cardStack;
    cards.splice(0);
    setCardStack([...cards]);
    if (props.clickedCard.length > 0) {
      setCardStack([...props.clickedCard]);
      props.removeCard();
    }
  }

  const topCard = cardStack[cardStack.length - 1];

  return (
    <PileDiv 
      onClick={handleClick}
    >
      {cardStack.length > 0 &&
        <Card {...topCard} />
      }
    </PileDiv>
  )
}

export default Pile3;