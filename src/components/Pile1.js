import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';

const PileDiv = styled.div`
  grid-column: 1 / 2;
  height: 200px;
  border: 3px solid #282c34;
  border-radius: 10px;
  `;

const usePreviousValue = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

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
  const [currentRank, setCurrentRank] = useState(null);
  const [currentSuit, setCurrentSuit] = useState(null);
  const prevRank = usePreviousValue(currentRank);
  const prevSuit = usePreviousValue(currentSuit);


  useEffect(() => {
    if (cardStack.length > 0) {
      setCurrentRank(cardStack[cardStack.length - 1].rank);
      setCurrentSuit(cardStack[cardStack.length - 1].suit);
    } else
    setCurrentRank(null);
  }, [currentRank, cardStack]);
  
  const handleClick = () => {
    console.log(prevRank, prevSuit);
    if (props.clickedCard.length > 0) {
      let incomingRank = props.clickedCard[0].rank;
      let incomingSuit = props.clickedCard[0].suit;
      if (incomingRank !== currentRank + 1) {
        if (incomingRank !== prevRank && incomingSuit !== prevSuit) {
          return;
        }
      }
      setCardStack([...cardStack, ...props.clickedCard]);
      props.removeCard();
    } else {
      let cards = cardStack;
      cards.splice(cards.length - 1);
      setCardStack([...cards]);
    }
  }

  let topCard = cardStack[cardStack.length - 1];

  return (
    <PileDiv onClick={handleClick}>
      {cardStack.length > 0 && (
        <Card {...topCard} />
      )}
    </PileDiv>
  )
}

export default Pile1;