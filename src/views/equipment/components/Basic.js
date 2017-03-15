import React from 'react';

// Components
import Input from '../../../components/Input';
import Select from '../../../components/Select';

class Basic extends React.Component {

  render() {
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
          />
          <Select
            side="right"
            inputWidth="half"
            label="Recipe Type"
            options={[{
              value: 'All Grain', label: 'All Grain',
            }]}
            name="equip-name"
          />
          <Input
            side="left"
            inputWidth="half"
            id="equip-eff"
            label="Default Brewhouse Efficiency"
            placeholder="ex: 72"
            measurement="%"
            tooltip="Total efficiency into the fermenter"
          />
          <Input
            side="right"
            inputWidth="half"
            id="equip-batch-size"
            label="Default Batch Size"
            placeholder="ex: 6"
            measurement="gal"
            tooltip="Total amount into the fermenter"
          />
        </div>
      </div>
    );
  }

}

export default Basic;
