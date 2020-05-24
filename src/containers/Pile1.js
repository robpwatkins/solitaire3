import { connect } from 'react-redux';
import Pile1 from '../components/Pile1';
import { removeCard, addCard, setSuccessfulState } from '../redux/actions';

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
    setSuccessfulState: () => dispatch(setSuccessfulState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pile1);