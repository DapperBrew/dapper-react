import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import Input from '../../../components/Input';

// actions
import * as actions from '../actions/equipment';

class Fermentation extends React.Component {

  handleSetTrubLoss = (loss) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqTrubLoss(loss));
  }

  handleSetFermenterLoss = (loss) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqFermenterLoss(loss));
  }

  handleSetFermenterTopUp = (topUp) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqFermenterTopUp(topUp));
  }

  render() {
    const { equipmentStaged } = this.props;
    return (
      <div className="col-md-6">
        <div className="card clearfix">
          <h3 className="card__Title">Fermentation</h3>
          <Input
            inputWidth="full"
            id="equip-trub-loss"
            label="Trub & Chiller Loss"
            placeholder="ex: .5"
            measurement="gal"
            tooltip="Amount of wort left in kettle & chiller after transfering to fermenter"
            onChange={this.handleSetTrubLoss}
            value={equipmentStaged.trubLoss}
          />
          <Input
            inputWidth="full"
            id="equip-fermenter-loss"
            label="Fermenter Loss"
            placeholder="ex: .5"
            measurement="gal"
            tooltip="Amount of wort left in fermenter after transfers or bottling"
            onChange={this.handleSetFermenterLoss}
            value={equipmentStaged.fermenterLoss}
          />
          <Input
            inputWidth="full"
            id="equip-fermenter-top"
            label="Fermenter Top-Up"
            placeholder="ex: .5"
            measurement="gal"
            tooltip="Amount of water added to wort after transering to fermenter"
            onChange={this.handleSetFermenterTopUp}
            value={equipmentStaged.fermenterTopUp}
          />
        </div>
      </div>
    );
  }
}

Fermentation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  equipmentStaged: PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({
  equipmentStaged: state.equipmentStaged,
});

export default connect(mapStateToProps)(Fermentation);
