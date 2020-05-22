import React from 'react';
import styled from 'styled-components';
import Deck from '../containers/Deck';
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

const Solitaire = () => {

  return (
    <>
      <GameBoard>
        <Deck />
        <Foundations />
        <Tableau />
      </GameBoard>
    </>
  )
}

export default Solitaire;