import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { cards } from '../cards';

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 7px;
`;

const Card = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    setIsClicked(true);
    const clickedCard = event.target.getAttribute('value');
    props.setClickedCard([clickedCard]);
  }

  return (
    <>
    {!isClicked && 
      <CardDiv 
        onClick={(event) => handleClick(event)}
        value={cards.Spades.Ace}
        >
        {cards.Spades.Ace}
      </CardDiv>
    }
    </>    
  )
}

export default Card;