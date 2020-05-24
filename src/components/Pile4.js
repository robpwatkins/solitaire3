import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';
import { usePreviousValue } from '../usePreviousValue';

const PileDiv = styled.div`
  grid-column: 4 / 5;
  height: 200px;
  border: 3px solid #282c34;
  border-radius: 10px;
`;

const Pile4 = (props) => {
  const [cardStack, setCardStack] = useState([
    {
      rank: 1,
      suit: 'Hearts!'
    }
  ]);

  let topCard = cardStack[cardStack.length - 1];

  const prevCard = usePreviousValue(topCard);

  const handleClick = () => {
    if (props.clickedCard.length > 0) {
      let incomingCard = props.clickedCard[0];
      let incomingCardStr = JSON.stringify(incomingCard);
      let prevCardStr = JSON.stringify(prevCard);
      if (cardStack.length > 0) {
        let incomingCardColor;
        let topCardColor;
        if (incomingCard.suit === 'Clubs!' || incomingCard.suit === 'Spades!') {
          incomingCardColor = 'B';
          } else
          incomingCardColor = 'R';
          if (topCard.suit === 'Clubs!' || topCard.suit === 'Spades!') {
            topCardColor = 'B';
          } else
          topCardColor = 'R';
        if (incomingCard.rank !== topCard.rank - 1) {
          if (incomingCardStr !== prevCardStr) {
            return;
          }
        }
        if (incomingCardColor !== topCardColor) {
              setCardStack([...cardStack, ...props.clickedCard]);
              props.removeCard();
        }
      }
      if (incomingCardStr !== prevCardStr) {
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
    <PileDiv 
      onClick={handleClick}
    >
      {cardStack.length > 0 &&
        <Card {...topCard} />
      }
    </PileDiv>
  )
}

export default Pile4;