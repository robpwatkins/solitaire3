import { connect } from 'react-redux';
import Card from '../components/Card';
import { removeCard, addCard, setCardInMove } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    clickedCard: state.clickedCard,
    cardInMove: state.cardInMove
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCard: () => dispatch(removeCard()),
    addCard: (card) => dispatch(addCard(card)),
    setCardInMove: () => dispatch(setCardInMove())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);