import React, { useState } from 'react';
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

  return (
    <>
      <CardDiv>
        {props.card}
      </CardDiv>
    </>    
  )
}

export default Card;