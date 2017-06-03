import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import Input from '../../../components/Input';
import Select from '../../../components/Select';

// actions
import * as actions from '../actions/equipment';

class Basic extends React.Component {
  handleSetName = (name) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqName(name));
  }

  handleSetType = (recipeType) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqType(recipeType));
  }

  handleSetEfficiency = (efficiency) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqEfficiency(efficiency));
  }

  handleSetBatchSize = (size) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqBatchSize(size));
  }

  render() {
    const { equipmentStaged } = this.props;
    return (
      <div className="col-md-12">
        <div className="card clearfix">
          <h3 className="card__Title">Name & Defaults</h3>
          <Input
            side="left"
            inputWidth="half"
            id="equip-name"
            label="Equipment Profile Name"
            placeholder="ex: 5 Gallon All Grain"
            onChange={this.handleSetName}
            value={equipmentStaged.name}
          />
          <Select
            side="right"
            inputWidth="half"
            label="Recipe Type"
            options={[{
              value: 'All Grain', label: 'All Grain',
            }]}
            name="equip-name"
            onChange={this.handleSetType}
            value={equipmentStaged.recipeType}
          />
          <Input
            side="left"
            inputWidth="half"
            id="equip-eff"
            label="Default Brewhouse Efficiency"
            placeholder="ex: 72"
            measurement="%"
            tooltip="Total efficiency into the fermenter"
            onChange={this.handleSetEfficiency}
            value={equipmentStaged.efficiency}
          />
          <Input
            side="right"
            inputWidth="half"
            id="equip-batch-size"
            label="Default Batch Size"
            placeholder="ex: 6"
            measurement="gal"
            tooltip="Total amount into the fermenter"
            onChange={this.handleSetBatchSize}
            value={equipmentStaged.batchSize}
          />
        </div>
      </div>
    );
  }
}

Basic.propTypes = {
  dispatch: PropTypes.func.isRequired,
  equipmentStaged: PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({
  equipmentStaged: state.equipmentStaged,
});

export default connect(mapStateToProps)(Basic);
