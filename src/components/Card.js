import React from 'react';
import styled from 'styled-components';

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

  const handleClick = (event) => {
    let card = event.target.getAttribute('value');
    props.addCard(card);
  }

  return (
    <>
      <CardDiv 
        value={props.card}
        onClick={handleClick}
        >
        {props.card}
      </CardDiv>
    </>    
  )
}

export default Card;