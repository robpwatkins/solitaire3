import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';
import { usePreviousValue } from '../usePreviousValue';
import { useOutsideClickAlerter } from '../outsideClickAlert';

const PileDiv = styled.div`
  grid-column: 1 / 2;
  height: 200px;
  box-shadow: ${props => props.clickedBorder ? "0 0 0 5px #fbe555" : ""};
  border: 3px solid #282c34;
  border-radius: 10px;
`;

const Pile1 = (props) => {
  const ref = useRef();
  const [isClicked, setIsClicked] = useState(false);
  const [isInMove, setIsInMove] = useState(false);
  const [cardStack, setCardStack] = useState([
    {
      rank: 13,
      suit: 'Hearts!',
    },
    {
      rank: 1,
      suit: 'Clubs!',
    }
  ]);
  
  let topCard = cardStack[cardStack.length - 1];
  
  const prevCard = usePreviousValue(topCard);
  
  // useOutsideClickAlerter(ref, (event) => {
  //   if (isClicked) {
  //     let targetName = event.target.getAttribute('class');
  //     if (targetName.includes('card')) {
  //       setIsClicked(false);
  //       setIsInMove(false);
  //       setCardStack([...cardStack, prevCard]);
  //       props.removeCard();
  //     }
  //     setIsInMove(false);
  //   }
  // });
  
  if (props.moveSuccessful && isClicked) {
    let cards = cardStack;
    console.log(cards);
    cards.splice(cardStack.length - 1);
    setCardStack([...cards]);
    setIsClicked(false);
  }

  const handleClick = () => {
    let incomingCard = props.clickedCard[0];
    let incomingCardStr = JSON.stringify(incomingCard);
    let prevCardStr = JSON.stringify(prevCard);
    setIsClicked(true);
  }
  
  // const handleClick = () => {
  //   let incomingCard = props.clickedCard[0];
  //   let incomingCardStr = JSON.stringify(incomingCard);
  //   let prevCardStr = JSON.stringify(prevCard);
  //     if (incomingCardStr === prevCardStr) setIsInMove(false);
  //   if (props.clickedCard.length > 0) {
  //     if (cardStack.length > 0) {
  //       let incomingCardColor;
  //       let topCardColor;
  //       if (incomingCard.suit === 'Clubs!' || incomingCard.suit === 'Spades!') {
  //         incomingCardColor = 'B';
  //         } else incomingCardColor = 'R';
  //         if (topCard.suit === 'Clubs!' || topCard.suit === 'Spades!') {
  //           topCardColor = 'B';
  //         } else topCardColor = 'R';
  //       if (incomingCard.rank !== topCard.rank - 1) {
  //         if (incomingCardStr !== prevCardStr) return;
  //       }
  //       if (incomingCardColor !== topCardColor) {
  //             setCardStack([...cardStack, ...props.clickedCard]);
  //             props.removeCard();
  //       }
  //     }
  //     if (incomingCardStr === prevCardStr || incomingCard.rank === 13) {
  //       setCardStack([...cardStack, ...props.clickedCard]);
  //       props.removeCard();
  //     } else return;
  //   } else {
  //     setIsClicked(true);
  //     setIsInMove(true);
  //     let cards = cardStack;
  //     cards.splice(cards.length - 1);
  //     setCardStack([...cards]);
  //   }
  // }
  
  return (
    <PileDiv 
      onClick={handleClick}
      {...(isInMove && {clickedBorder: true})}
      ref={ref}
    >
      {cardStack.length > 0 && (
        <Card {...(props.clickedCard.length === 0 ? {...topCard} : {...prevCard})} />
      )}
    </PileDiv>
  )
}

export default Pile1;