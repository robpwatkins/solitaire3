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
    {
      rank: 6,
      suit: 'Clubs!'
    },
    {
      rank: 2,
      suit: 'Clubs!',
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
        if (incomingCard.rank !== topCard.rank + 1) {
          if (incomingCardStr !== prevCardStr) {
            return;
          }
        }
        if (((topCard.suit === 'Spades!' || topCard.suit === 'Clubs!') &&
            (incomingCard.suit === 'Hearts!' || incomingCard.suit === 'Diamonds!'))
            || (topCard.suit === 'Hearts!' || topCard.suit === 'Diamonds!') &&
            (incomingCard.suit === 'Spades!' || incomingCard.suit === 'Clubs')) {
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

  // const handleClick = () => {
  //   let incomingCard = props.clickedCard[0];
  //   let incomingCardStr = JSON.stringify(incomingCard);
  //   let topCardStr = JSON.stringify(topCard);
  //   if (props.clickedCard.length > 0) {
  //     if (incomingCard.rank === topCard.rank + 1) { 
  //       if (((topCardStr.includes('Spades!') || topCardStr.includes('Clubs!')) &&
  //          (incomingCardStr.includes('Spades!') || incomingCardStr.includes('Clubs!')))
  //          || (topCardStr.includes('Hearts!') || topCardStr.includes('Diamonds!')) &&
  //          (incomingCardStr.includes('Hearts!') || incomingCardStr.includes('Diamonds'))) {
  //           return;
  //       }
  //     }
  //   } 
  //   console.log(prevCard);
  //   let prevCardStr = JSON.stringify(prevCard);
  //   if (incomingCardStr !== prevCardStr) {
  //     return;
  //   } else {
  //     let cards = cardStack;
  //     cards.splice(cards.length - 1);
  //     setCardStack([...cards]);
  //   }
  // }


  return (
    <PileDiv onClick={handleClick}>
      {cardStack.length > 0 && (
        <Card {...topCard} />
      )}
    </PileDiv>
  )
}

export default Pile1;