import React from 'react';
import Foundation1 from '../containers/Foundation1';
import Foundation2 from '../containers/Foundation2';
import Foundation3 from '../containers/Foundation3';
import Foundation4 from '../containers/Foundation4';

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