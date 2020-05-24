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

const successfulPlace = (state = false, action) => {
  switch(action.type) {
    case 'SET_SUCCESSFUL_PLACE':
      return {
        ...state,
        successfulPlace: !state.successfulPlace
      }
    default:
      return state;
  }
}

export default combineReducers({ clickedCard, successfulPlace });