import React, { useRef } from 'react';
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
  const ref = useRef();

  // console.log(props.cardInMove, props.clickedCard);
  const handleClick = () => {
    if (!props.cardInMove) {
      let card = {
        rank: props.rank,
        suit: props.suit,
      };
      props.setCardInMove();
      props.addCard(card);
    }
  }

  return (
    <>
      <CardDiv onClick={handleClick} ref={ref} className="card">
        {props.rank} of {props.suit}
      </CardDiv>
    </>    
  )
}

export default Card;