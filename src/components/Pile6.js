import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';

const PileDiv = styled.div`
  grid-column: 6 / 7;
  height: 200px;
  border: 3px solid #282c34;
  border-radius: 10px;
`;

const Pile6 = (props) => {
  const [cardStack, setCardStack] = useState([
    {
      rank: 2,
      suit: 'Clubs!'
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

export default Pile6;