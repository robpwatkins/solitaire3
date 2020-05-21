import React from 'react';
import styled from 'styled-components';
import Deck from '../components/Deck';
import Tableau from '../components/Tableau';

const GameBoard = styled.div`
  display: grid;
  width: 100vw;
  height: 100%;
  grid-template-columns: repeat(7, 1fr);
  gap: 15px;
  padding: 25px;
`;

const Foundation1 = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 4 / 5;
  border: 3px solid #545c6d;
  border-radius: 9px;
`;

const Foundation2 = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 5 / 6;
  border: 3px solid #545c6d;
  border-radius: 9px;
`;

const Foundation3 = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 6 / 7;
  border: 3px solid #545c6d;
  border-radius: 9px;
`;

const Foundation4 = styled.div`
  width: 100%;
  height: 200px;
  grid-column: 7 / 8;
  border: 3px solid #545c6d;
  border-radius: 9px;
`;

const Solitaire = () => {
  return (
    <div>
      <h1>Solitaire!</h1>
      <GameBoard>
        <Deck />
        <Foundation1 />
        <Foundation2 />
        <Foundation3 />
        <Foundation4 />
        <Tableau />
      </GameBoard>
    </div>
  )
}

export default Solitaire;