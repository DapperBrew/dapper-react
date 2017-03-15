import React from 'react';
import Toggle from 'react-toggle';

// Components
import Input from '../../../components/Input';
import Select from '../../../components/Select';

class Mash extends React.Component {

  render() {
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
          />
          <Input
            inputWidth="full"
            id="equip-mash-weight"
            label="Mash Tun Weight"
            placeholder="ex: 9"
            measurement="lb"
          />
          <Select
            inputWidth="full"
            label="Mash Tun Material"
            options={[{
              value: 'Plastic', label: 'Plastic',
            }]}
            name="equip-mash-material"
          />
          <Input
            inputWidth="full"
            id="equip-mash-deadspace"
            label="Mash Tun Deadspace"
            placeholder="ex: .5"
            measurement="gal"
            tooltip="Amount left over after it is drained"
          />
          <Input
            inputWidth="full"
            id="equip-mash-thickness"
            label="Mash Thickness"
            placeholder="ex: 1.25"
            measurement="qt/lb"
            tooltip="Ratio of water to grain in your mash"
          />
          <Input
            inputWidth="full"
            id="equip-lauter-deadspace"
            label="Lauter Tun Deadspace"
            placeholder="ex: .5"
            measurement="gal"
            tooltip="Amount left over after it is drained"
          />
          <Toggle
            id="cheese-status"
          />
          <label htmlFor="cheese-status">Adjust Mash Temps for Equipment</label>
        </div>
      </div>
    );
  }

}

export default Mash;
