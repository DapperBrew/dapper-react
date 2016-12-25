import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HeaderActionCreators from '../actions';

import Calculators from '../components/Calculators';

const mapStateToProps = state => ({
  history: state.history,
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(HeaderActionCreators, dispatch);


const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculators);

export default CalculatorContainer;
