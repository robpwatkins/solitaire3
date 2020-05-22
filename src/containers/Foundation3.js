import { connect } from 'react-redux';
import Foundation3 from '../components/Foundation3';
import { removeCard, addCard } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    clickedCard: state.clickedCard
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCard: () => dispatch(removeCard()),
    addCard: (card) => dispatch(addCard(card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Foundation3);