import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';
import { usePreviousValue } from '../usePreviousValue';

const PileDiv = styled.div`
  grid-column: 1 / 2;
  height: 200px;
  border: 3px solid #282c34;
  border-radius: 10px;
  `;

const Pile1 = (props) => {
  const [cardStack, setCardStack] = useState([
    // {
    //   rank: 6,
    //   suit: 'Clubs!'
    // },
    {
      rank: 2,
      suit: 'Clubs!',
    }
  ]);
  const prevCard = usePreviousValue(cardStack[cardStack.length - 1]);

  let topCard = cardStack[cardStack.length - 1];

  const handleClick = () => {
    if (props.clickedCard.length > 0) {
      let incomingCard = {
        rank: props.clickedCard[0].rank,
        suit: props.clickedCard[0].suit
      }
      if (cardStack.length > 0) {
        if (incomingCard.rank !== topCard.rank + 1) {
          if (JSON.stringify(incomingCard) !== JSON.stringify(prevCard)) {
            return;
          }
        }
      }
      if (cardStack.length === 0 && JSON.stringify(incomingCard) !== JSON.stringify(prevCard)) {
        return;
      }
      setCardStack([...cardStack, ...props.clickedCard]);
      props.removeCard();
    } else {
      let cards = cardStack;
      cards.splice(cards.length - 1);
      setCardStack([...cards]);
    }
  }


  return (
    <PileDiv onClick={handleClick}>
      {cardStack.length > 0 && (
        <Card {...topCard} />
      )}
    </PileDiv>
  )
}

export default Pile1;