import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';
import { usePreviousValue } from '../usePreviousValue';

const Foundation1Div = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 4 / 5;
  border: 3px solid #345c7d;
  border-radius: 10px;
`;

const Foundation1 = (props) => {
  const [cardStack, setCardStack] = useState([{
    rank: 1,
    suit: 'Hearts!'
  }]);
  
  let topCard;
  if (cardStack.length > 0) topCard = cardStack[cardStack.length - 1];
  
  const prevCard = usePreviousValue(topCard);
  
  const handleClick = () => {
    if (props.clickedCard.length > 0) {
      let incomingCard = props.clickedCard[0];
      let incomingCardStr = JSON.stringify(incomingCard);
      let prevCardStr = JSON.stringify(prevCard);
      if (cardStack.length === 0) {
        console.log({incomingCardStr}, {prevCardStr});
        if (incomingCardStr === prevCardStr || incomingCard.rank === 1) {
          setCardStack([...cardStack, ...props.clickedCard]);
          props.removeCard();
        } 
        else return;
      } else
      if (incomingCard.rank === topCard.rank + 1) {
        let incomingCardColor;
        let topCardColor;
        if (incomingCard.suit === 'Spades!' || incomingCard.suit === 'Clubs!') {
          incomingCardColor = 'B';
          } else
          incomingCardColor = 'R';
          if (topCard.suit === 'Spades!' || topCard.suit === 'Clubs!') {
            incomingCardColor = 'B';
            } else
            topCardColor = 'R';
            if (incomingCardColor !== topCardColor) {
                setCardStack([...cardStack, ...props.clickedCard]);
                props.removeCard();
              }
            }
          } else {
            console.log('heyoo');
            let cards = cardStack;
            cards.splice(cards.length - 1);
            setCardStack([...cards]);
          }
            
  }  

  return (
    <Foundation1Div onClick={handleClick}>
      {cardStack.length > 0 && (
        <Card {...topCard} />
      )}
    </Foundation1Div>
  )
}

export default Foundation1;