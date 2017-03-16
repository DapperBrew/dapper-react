import React from 'react';
import { connect } from 'react-redux';

// Components
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import MashAdjustToggle from './MashAdjustToggle';

// actions
import * as actions from '../actions/equipment';

class Mash extends React.Component {

  handleSetMashTunVolume = (volume) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqMashTunVolume(volume));
  }

  handleSetMashTunWeight = (weight) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqMashTunWeight(weight));
  }

  handleSetMashTunMaterial = (material) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqMashTunMaterial(material));
  }

  handleSetMashTunDeadspace = (deadspace) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqMashTunDeadspace(deadspace));
  }

  handleSetMashThickness = (thickness) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqMashThickness(thickness));
  }

  handleSetLauterTunDeadspace = (deadspace) => {
    const { dispatch } = this.props;
    dispatch(actions.setEqLauterTunDeadspace(deadspace));
  }

  handleSetMashTempAdjust = () => {
    const { dispatch, equipments } = this.props;
    dispatch(actions.setEqMashTempAdjust(!equipments.mashTempAdjust));
  }


  render() {
    const { equipments } = this.props;
    return (
      <div className="col-md-6">
        <div className="card clearfix">
          <h3 className="card__Title">Mash & Lauter</h3>
          <Input
            inputWidth="full"
            id="equip-mash-volume"
            label="Mash Tun Volume"
            placeholder="ex: 10"
            measurement="gal"
            onChange={this.handleSetMashTunVolume}
            value={equipments.mashTunVolume}
          />
          <Input
            inputWidth="full"
            id="equip-mash-deadspace"
            label="Mash Tun Deadspace"
            placeholder="ex: .5"
            measurement="gal"
            tooltip="Amount left over after it is drained"
            onChange={this.handleSetMashTunDeadspace}
            value={equipments.mashTunDeadspace}
          />
          <Input
            inputWidth="full"
            id="equip-mash-thickness"
            label="Mash Thickness"
            placeholder="ex: 1.25"
            measurement="qt/lb"
            tooltip="Ratio of water to grain in your mash"
            onChange={this.handleSetMashThickness}
            value={equipments.mashThickness}
          />
          <Input
            inputWidth="full"
            id="equip-lauter-deadspace"
            label="Lauter Tun Deadspace"
            placeholder="ex: .5"
            measurement="gal"
            tooltip="Amount left over after it is drained"
            onChange={this.handleSetLauterTunDeadspace}
            value={equipments.lauterTunDeadspace}
          />
          <MashAdjustToggle
            id="equip-mash-adjust"
            onChange={this.handleSetMashTempAdjust}
            checked={equipments.mashTempAdjust}
            tooltip="It is recommended to preheat your mash tun, however you can enable this option, and dapper will adjust mash temps according to your equipment profile"
          />
          <Input
            inputWidth="full"
            id="equip-mash-weight"
            label="Mash Tun Weight"
            placeholder="ex: 9"
            measurement="lb"
            onChange={this.handleSetMashTunWeight}
            value={equipments.mashTunWeight}
            disabled={!equipments.mashTempAdjust}
          />
          <Select
            inputWidth="full"
            label="Mash Tun Material"
            options={[{
              value: 'Plastic', label: 'Plastic',
            }]}
            name="equip-mash-material"
            onChange={this.handleSetMashTunMaterial}
            value={equipments.mashTunMaterial}
            disabled={!equipments.mashTempAdjust}
          />
        </div>
      </div>
    );
  }

}

Mash.propTypes = {
  dispatch: React.PropTypes.func,
  equipments: React.PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({
  equipments: state.equipments,
});

export default connect(mapStateToProps)(Mash);
