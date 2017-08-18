import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import CalcLayout from '../components/CalcLayout';
import Card from '../../../components/Card';
import Input from '../../../components/Input';
import CalcResult from '../components/CalcResult';

// Actions
import * as actions from '../actions/abv';

// selectors
import { getABV, getApparentExtract, getOriginalExtract, getCalories, getApparentAttenuation } from '../selectors/abv';


class Abv extends React.Component {

  handleSetStartingGravity = (gravity) => {
    const { dispatch } = this.props;
    dispatch(actions.setOriginalGravity(gravity));
  }

  handleSetFinalGravity = (gravity) => {
    const { dispatch } = this.props;
    dispatch(actions.setFinalGravity(gravity));
  }

  render() {
    const {
      abv,
      calculatedAbv,
      calculatedAparentExtract,
      calculatedOriginalExtract,
      calculatedCalories,
      calculatedApparentAttenuation,
    } = this.props;

    return (
      <CalcLayout name="ABV">
        <div className="col-md-6">
          <Card cardTitle="Input">
            <Input
              inputWidth="full"
              id="starting-gravity"
              label="Staring Gravity"
              placeholder="ex: 1.054"
              measurement="SG"
              onChange={this.handleSetStartingGravity}
              value={abv.originalGravity}
            />
            <Input
              inputWidth="full"
              id="final-gravity"
              label="Final Gravity"
              placeholder="ex: 1.012"
              measurement="SG"
              onChange={this.handleSetFinalGravity}
              value={abv.finalGravity}
            />
          </Card>
        </div>
        <div className="col-md-6">
          <Card cardHeader={true} cardTitle="Results">
            <CalcResult title="Alcohol By Volume (ABV)">{calculatedAbv}</CalcResult>
            <CalcResult title="Original Extract" isHalf={true}>{calculatedOriginalExtract}</CalcResult>
            <CalcResult title="Apparent Extract" isHalf={true}>{calculatedAparentExtract}</CalcResult>
            <CalcResult title="Calories (12oz)" isHalf={true}>{calculatedCalories}</CalcResult>
            <CalcResult title="Apparent Attenuation" isHalf={true}>{calculatedApparentAttenuation}</CalcResult>
          </Card>
        </div>
      </CalcLayout>
    );
  }
}

Abv.propTypes = {
  dispatch: PropTypes.func.isRequired,
  abv: PropTypes.object, // eslint-disable-line
  calculatedAbv: PropTypes.string.isRequired,
  calculatedAparentExtract: PropTypes.string.isRequired,
  calculatedOriginalExtract: PropTypes.string.isRequired,
  calculatedCalories: PropTypes.string.isRequired,
  calculatedApparentAttenuation: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  abv: state.calc.abv,
  calculatedAbv: getABV(state),
  calculatedAparentExtract: getApparentExtract(state),
  calculatedOriginalExtract: getOriginalExtract(state),
  calculatedCalories: getCalories(state),
  calculatedApparentAttenuation: getApparentAttenuation(state),
});

export default connect(mapStateToProps)(Abv);
