import React from 'react';

// Components
import Input from '../../../components/Input';

class Mash extends React.Component {

  render() {
    return (
      <div className="col-md-12">
        <div className="card clearfix">
          <h3 className="card__Title">Advanced</h3>
          <Input
            side="left"
            inputWidth="half"
            id="equip-specific-heat"
            label="Mash Tun Specific Heat Override"
            placeholder="ex: .30"
            measurement="cal/gc"
            tooltip="The specific heat of a material (kcal/kg &deg;C)"
          />
          <Input
            side="right"
            inputWidth="half"
            id="equip-boil-temp"
            label="Boil Temperature"
            placeholder="ex: 212"
            measurement="&deg;F"
          />
          <Input
            side="left"
            inputWidth="half"
            id="equip-wort-shrinkage"
            label="Wort Shrinkage"
            placeholder="recommended: 4"
            measurement="%"
            tooltip="Percentage of volume lost after the wort cools"
          />
          <Input
            side="right"
            inputWidth="half"
            id="equip-grain-volume"
            label="Grain Volume"
            placeholder="recommended: 0.0783"
            tooltip="The volume that grain occupies"
            measurement="gal/lb"
          />
          <Input
            side="left"
            inputWidth="half"
            id="equip-grain-absorb"
            label="Grain Absorption"
            placeholder="recommended: 0.12"
            tooltip="The amount of water absorbed by grain"
            measurement="gal/lb"
          />
        </div>
      </div>
    );
  }

}

export default Mash;
