import React from 'react';
import Pile1 from './Pile1';
import Pile2 from './Pile2';
import Pile3 from '../containers/Pile3';
import Pile4 from './Pile4';
import Pile5 from './Pile5';
import Pile6 from './Pile6';
import Pile7 from './Pile7';
// import styled from 'styled-components';

const Tableau = (props) => {
  return (
    <>
      <Pile1 />
      <Pile2 />
      <Pile3 setClickedCard={props.setClickedCard} />
      <Pile4 />
      <Pile5 />
      <Pile6 />
      <Pile7 />
    </>
  )
}

export default Tableau;