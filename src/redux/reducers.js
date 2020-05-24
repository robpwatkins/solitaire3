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

const cardInMove = (state = false, action) => {
  switch(action.type) {
    case 'SET_CARD_IN_MOVE':
      return {
        ...state,
        cardInMove: !cardInMove
      }
    default:
      return state;
  }
}

const moveSuccessful = (state = false, action) => {
  switch(action.type) {
    case 'SET_MOVE_SUCCESSFUL':
      return {
        ...state,
        moveSuccessful: !moveSuccessful
      }
      default:
        return state;
  }
}

export default combineReducers({ clickedCard, cardInMove, moveSuccessful });