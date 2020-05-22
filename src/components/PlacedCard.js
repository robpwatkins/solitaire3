import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 7px;
`;

const PlacedCard = (props) => {
  return (
    <>
      {props.clickedCard.length > 0 &&
        <CardDiv 
          value={props.clickedCard[0]}>
            {props.clickedCard[0]}
        </CardDiv>
      }
    </>
  )
}

export default PlacedCard;