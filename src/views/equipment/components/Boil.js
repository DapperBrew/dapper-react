import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import Input from '../../../components/Input';

// actions
import * as actions from '../actions/equipment';

class Boil extends React.Component {

  handleSetBoilTime = (time) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqBoilTime(time));
  }

  handleSetBoilOff = (boilOff) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqBoilOff(boilOff));
  }

  handleSetBoilTopUp = (topUp) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqBoilTopUp(topUp));
  }

  render() {
    const { equipmentStaged } = this.props;
    return (
      <div className="col-md-6">
        <div className="card clearfix">
          <h3 className="card__Title">Boil</h3>
          <Input
            inputWidth="full"
            id="equip-boil-time"
            label="Default Boil Time"
            placeholder="ex: 60"
            measurement="min"
            onChange={this.handleSetBoilTime}
            value={equipmentStaged.boilTime}
          />
          <Input
            inputWidth="full"
            id="equip-boil-off"
            label="Boil Off Per Hour"
            placeholder="ex: 1.1"
            tooltip="Amount of wort lost every hour while boi``ling"
            measurement="gal"
            onChange={this.handleSetBoilOff}
            value={equipmentStaged.boilOff}
          />
          <Input
            inputWidth="full"
            id="equip-boil-top"
            label="Pre-Boil Top-Up"
            placeholder="ex: 1.5"
            measurement="gal"
            tooltip="Amount of water added to wort before boiling"
            onChange={this.handleSetBoilTopUp}
            value={equipmentStaged.boilTopUp}
          />
        </div>
      </div>
    );
  }
}

Boil.propTypes = {
  dispatch: PropTypes.func.isRequired,
  equipmentStaged: PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({
  equipmentStaged: state.equipmentStaged,
});

export default connect(mapStateToProps)(Boil);
