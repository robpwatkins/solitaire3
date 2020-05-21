import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const PileDiv = styled.div`
  grid-column: 3 / 4;
  height: 200px;
  border: 3px solid #282c34;
  border-radius: 10px;
`;

const Pile3 = (props) => {
  return (
    <PileDiv>
      <Card setClickedCard={props.setClickedCard} />
    </PileDiv>
  )
}

export default Pile3;