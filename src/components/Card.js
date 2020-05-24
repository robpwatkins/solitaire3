import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 23px;
  background: white;
  border-radius: 7px;
`;

const Card = (props) => {

  const handleClick = () => {
    if (props.clickedCard.length === 0) {
      let card = {
        rank: props.rank,
        suit: props.suit,
      };
      props.addCard(card);
      console.log(props.clickedCard);
    }
  }

  return (
    <>
      <CardDiv 
        onClick={handleClick}
        >
        {props.rank} of {props.suit}
      </CardDiv>
    </>    
  )
}

export default Card;