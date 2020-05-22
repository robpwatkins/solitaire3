import React, { useState } from 'react';
import styled from 'styled-components';
import Deck from '../components/Deck';
import Foundations from '../components/Foundations';
import Tableau from '../components/Tableau';

const GameBoard = styled.div`
  display: grid;
  width: 100vw;
  height: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr 3fr;
  gap: 15px;
  padding: 25px;
`;

const Heading = styled.div`
  width: 100%;
  text-align: center;
`;

const Solitaire = () => {
  const [clickedCard, setClickedCard] = useState([]);

  return (
    <>
      <GameBoard>
        <Deck />
        <Foundations clickedCard={clickedCard} />
        <Tableau setClickedCard={setClickedCard} />
      </GameBoard>
    </>
  )
}

export default Solitaire;