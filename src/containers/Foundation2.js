import { connect } from 'react-redux';
import Foundation2 from '../components/Foundation2';

const mapStateToProps = (state) => {
  return {
    clickedCard: state.clickedCard
  }
}

export default connect(mapStateToProps)(Foundation2);