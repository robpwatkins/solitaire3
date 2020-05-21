import React from 'react';
import styled from 'styled-components';
import Deck from '../components/Deck';
import Foundation1 from '../components/Foundation1';
import Foundation2 from '../components/Foundation2';
import Foundation3 from '../components/Foundation3';
import Foundation4 from '../components/Foundation4';
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