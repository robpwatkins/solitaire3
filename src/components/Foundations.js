import React from 'react';
import Foundation1 from '../components/Foundation1';
import Foundation2 from '../components/Foundation2';
import Foundation3 from '../components/Foundation3';
import Foundation4 from '../components/Foundation4';

const Foundations = (props) => {
  return (
    <>
      <Foundation1 clickedCard={props.clickedCard} />
      <Foundation2 clickedCard={props.clickedCard} />
      <Foundation3 clickedCard={props.clickedCard} />
      <Foundation4 clickedCard={props.clickedCard} />
    </>
  )
}

export default Foundations;