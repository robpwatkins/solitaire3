import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../containers/Card';

const PileDiv = styled.div`
  grid-column: 2 / 3;
  height: 200px;
  border: 3px solid #282c34;
  border-radius: 10px;
`;

const Pile2 = (props) => {
  const [cardStack, setCardStack] = useState(["6 of Hearts!"]);

  const handleClick = () => {
    let cards = cardStack;
    cards.splice(0);
    setCardStack([...cards]);
    if (props.clickedCard.length > 0) {
      setCardStack([...props.clickedCard]);
      props.removeCard();
    }
  }
  return (
    <PileDiv 
      onClick={handleClick}
    >
      {cardStack.length > 0 &&
        <Card card={cardStack[0]} />
      }
    </PileDiv>
  )
}

export default Pile2;