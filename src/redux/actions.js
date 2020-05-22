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