import React from 'react';
import { connect } from 'react-redux';

// Components
import Input from '../../../components/Input';
import Toggle from 'react-toggle';

// actions
import * as actions from '../actions/equipment';

class Advanced extends React.Component {

  handleSetSpecificHeat = (specificHeat) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqSpecificHeat(specificHeat));
  }

  handleSetBoilTemp = (temp) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqBoilTemp(temp));
  }

  handleSetWortShrinkage = (shrinkage) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqWortShrinkage(shrinkage));
  }

  handleSetGrainVolume = (volume) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqGrainVolume(volume));
  }

  handleSetGrainAbsorption = (absorption) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqGrainAbsorption(absorption));
  }

  handleSetEnableAdvanced = () => {
    const { dispatch, equipments } = this.props;
    dispatch(actions.setEqEnableAdvanced(!equipments.enableAdvanced));
  }

  handleRenderAdvanced = () => {
    const { equipments } = this.props;
    if (equipments.enableAdvanced) {
      return (
        <div>
          <Input
            side="left"
            inputWidth="half"
            id="equip-specific-heat"
            label="Mash Tun Specific Heat Override"
            placeholder="ex: .30"
            measurement="cal/gc"
            tooltip="The specific heat of a material (kcal/kg &deg;C)"
            onChange={this.handleSetSpecificHeat}
            value={equipments.specificHeat}
          />
          <Input
            side="right"
            inputWidth="half"
            id="equip-boil-temp"
            label="Boil Temperature"
            placeholder="ex: 212"
            measurement="&deg;F"
            tooltip="Adjust the boil temperature. Usually ~212F or 100C"
            onChange={this.handleSetBoilTemp}
            value={equipments.boilTemp}
          />
          <Input
            side="left"
            inputWidth="half"
            id="equip-wort-shrinkage"
            label="Wort Shrinkage"
            placeholder="recommended: 4"
            measurement="%"
            tooltip="Percentage of volume lost after the wort cools"
            onChange={this.handleSetWortShrinkage}
            value={equipments.wortShrinkage}
          />
          <Input
            side="right"
            inputWidth="half"
            id="equip-grain-volume"
            label="Grain Volume"
            placeholder="recommended: 0.0783"
            tooltip="The volume that grain occupies"
            measurement="gal/lb"
            onChange={this.handleSetGrainVolume}
            value={equipments.grainVolume}
          />
          <Input
            side="left"
            inputWidth="half"
            id="equip-grain-absorb"
            label="Grain Absorption"
            placeholder="recommended: 0.12"
            tooltip="The amount of water absorbed by grain"
            measurement="gal/lb"
            onChange={this.handleSetGrainAbsorption}
            value={equipments.grainAbsorption}
          />
        </div>
      );
    }
    return null;
  }

  render() {
    const { equipments } = this.props;
    return (
      <div className="col-md-12">
        <div className="card clearfix">
          <h3 className="card__Title">Advanced</h3>
          <div className="mb1">
            <Toggle
              id="advanced-toggle"
              onChange={this.handleSetEnableAdvanced}
              checked={equipments.enableAdvanced}
            />
            <label htmlFor="advanced-toggle">Enabled advanced equipment settings? (Danger Will Robinson, Danger!)</label>
          </div>
          {this.handleRenderAdvanced()}
        </div>
      </div>
    );
  }

}

Advanced.propTypes = {
  dispatch: React.PropTypes.func,
  equipments: React.PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({
  equipments: state.equipments,
});

export default connect(mapStateToProps)(Advanced);
