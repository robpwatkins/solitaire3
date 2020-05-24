import { connect } from 'react-redux';
import Foundation1 from '../components/Foundation1';
import { removeCard, addCard, setSuccessfulPlace, setSuccessfulState } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    clickedCard: state.clickedCard,
    successfulPlace: state.successfulPlace
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCard: () => dispatch(removeCard()),
    addCard: (card) => dispatch(addCard(card)),
    setSuccessfulPlace: () => dispatch(setSuccessfulState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Foundation1);