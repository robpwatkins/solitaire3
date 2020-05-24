import { connect } from 'react-redux';
import Pile1 from '../components/Pile1';
import { removeCard, addCard, setCardInMove, setMoveSuccessful } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    clickedCard: state.clickedCard,
    cardInMove: state.cardInMove,
    moveSuccessful: state.moveSuccessful
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCard: () => dispatch(removeCard()),
    addCard: (card) => dispatch(addCard(card)),
    setCardInMove: () => dispatch(setCardInMove()),
    setMoveSuccessful: () => dispatch(setMoveSuccessful())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pile1);