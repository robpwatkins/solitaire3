import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { cards } from '../cards';

const PileDiv = styled.div`
  grid-column: 3 / 4;
  height: 200px;
  border: 3px solid #282c34;
  border-radius: 10px;
`;

const Pile3 = (props) => {
  const [cardStack, setCardStack] = useState(['Ace of Spades!']);

  const handleClick = () => {
    let cards = cardStack;
    let card = cards.splice(0);
    setCardStack(...cards);
    props.setClickedCard(...card);
    // console.log(cardStack.length);
  }

  return (
    <PileDiv onClick={handleClick}>
      {cardStack &&
        <Card card={cardStack[0]} />
      }
    </PileDiv>
  )
}

export default Pile3;