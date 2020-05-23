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
  const [cardStack, setCardStack] = useState([]);
  
  let topCard;
  
  const prevCard = usePreviousValue(topCard);
  
  // const handleClick = () => {
  //   if (props.clickedCard.length > 0) {
  //     let incomingCard = props.clickedCard[0];
  //     if (cardStack.length === 0) {
  //       if (incomingCard.rank !== 1) {
  //         return;
  //       }
  //     }
  //     let incomingCardStr = JSON.stringify(incomingCard);
  //     let prevCardStr = JSON.stringify(prevCard);
  //     if (incomingCardStr !== prevCardStr) {
  //       return;
  //     }
  //     if (incomingCard.rank !== topCard.rank + 1) {
  //       return;
  //     }
  //     setCardStack([cardStack, ...props.clickedCard]);
  //     props.removeCard();
  //     // setCurrentRank(incomingRank);
  //   }
  //   if (cardStack.length === 0) return; 
  //   else {
  //     let cards = cardStack;
  //     cards.splice(cards.length - 1);
  //     setCardStack(...cards);
  //     // setCurrentRank(currentRank - 1);
  //   }
  // }

  const handleClick = () => {
    if (props.clickedCard.length > 0) {
      let incomingCard = props.clickedCard[0];
      let incomingCardStr = JSON.stringify(incomingCard);
      let prevCardStr = JSON.stringify(prevCard);
      if (cardStack.length === 0) {
        if (incomingCardStr !== prevCardStr || incomingCard.rank !== 1) return;
      }
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
    }
    setCardStack([...cardStack, ...props.clickedCard]);
    props.removeCard();
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