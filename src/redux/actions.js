export const removeCard = () => {
  return {
    type: 'REMOVE_CARD',
  }
}

export const addCard = (card) => {
  return {
    type: 'ADD_CARD',
    value: card
  }
}

export const setCardInMove = () => {
  return {
    type: 'SET_CARD_IN_MOVE',
  }
}

export const setMoveSuccessful = () => {
  return {
    type: 'SET_MOVE_SUCCESSFUL'
  }
}