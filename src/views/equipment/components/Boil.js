import React from 'react';

// Components
import Input from '../../../components/Input';

class Boil extends React.Component {

  render() {
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
          />
          <Input
            inputWidth="full"
            id="equip-boil-off"
            label="Boil Off Per Hour"
            placeholder="ex: 1.1"
            tooltip="Amount of water lost every hour while boiling"
            measurement="gal"
          />
          <Input
            inputWidth="full"
            id="equip-boil-top"
            label="Pre-Boil Top-Up"
            placeholder="ex: 1.5"
            measurement="gal"
            tooltip="Amount of water added to wort before boiling"
          />
        </div>
      </div>
    );
  }

}

export default Boil;
