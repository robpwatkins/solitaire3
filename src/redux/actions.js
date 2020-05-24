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

export const setSuccessfulState = () => {
  return {
    type: 'SET_SUCCESSFUL_PLACE',
  }
}