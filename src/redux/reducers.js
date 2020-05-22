import { combineReducers } from 'redux';

const clickedCard = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [ action.value, ...state ];
    case 'REMOVE_CARD':
      const cards = [ ...state ];
      cards.splice(0);
      return cards;
    default:
      return state;
  }
}

export default combineReducers({ clickedCard });