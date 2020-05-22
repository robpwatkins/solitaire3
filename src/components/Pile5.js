import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';

const PileDiv = styled.div`
  grid-column: 5 / 6;
  height: 200px;
  border: 3px solid #282c34;
  border-radius: 10px;
`;

const Pile5 = (props) => {
  const [cardStack, setCardStack] = useState([
    {
      rank: '11',
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

  let topCard = cardStack[cardStack.length - 1];

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

export default Pile5;