import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';

const PileDiv = styled.div`
  grid-column: 2 / 3;
  height: 200px;
  border: 3px solid #282c34;
  border-radius: 10px;
`;

const Pile2 = (props) => {
  const [cardStack, setCardStack] = useState([
    {
      rank: 6,
      suit: 'Diamonds!'
    },
    {
      rank: 3,
      suit: 'Hearts!'
    }
  ]);
  const [currentRank, setCurrentRank] = useState(null);

  useEffect(() => {
    if (cardStack.length > 0) {
      setCurrentRank(cardStack[cardStack.length - 1].rank);
    } else
    setCurrentRank(null);
  }, [currentRank, cardStack]);

  const handleClick = () => {
    if (props.clickedCard.length > 0) {
      let incomingRank = props.clickedCard[0].rank;
      if (incomingRank !== currentRank + 1) {
        if (currentRank !== null) {
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
    <PileDiv 
      onClick={handleClick}
    >
      {cardStack.length > 0 &&
        <Card {...topCard} />
      }
    </PileDiv>
  )
}

export default Pile2;