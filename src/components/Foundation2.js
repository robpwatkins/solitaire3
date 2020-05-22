import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Foundation2Div = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 5 / 6;
  border: 3px solid #345c7d;
  border-radius: 10px;
`;

const Foundation2 = (props) => {
  const [cardStack, setCardStack] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (props.clickedCard.length < 1) {
      return;
    }
    setCardStack([...props.clickedCard]);
    setIsClicked(true);
  }

  return (
    <Foundation2Div onClick={handleClick}>
      {props.clickedCard.length > 0 &&
      isClicked &&
      <Card card={props.clickedCard[0]} />}
    </Foundation2Div>
  )
}

export default Foundation2;