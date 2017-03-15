import React from 'react';

// Components
import Input from '../../../components/Input';

class Fermentation extends React.Component {

  render() {
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
          />
          <Input
            inputWidth="full"
            id="equip-fermenter-loss"
            label="Fermenter Loss"
            placeholder="ex: .5"
            measurement="gal"
            tooltip="Amount of wort left in fermenter after transfers or bottling"
          />
          <Input
            inputWidth="full"
            id="equip-fermenter-top"
            label="Fermenter Top-Up"
            placeholder="ex: .5"
            measurement="gal"
            tooltip="Amount of water added to wort after transering to fermenter"
          />
        </div>
      </div>
    );
  }

}

export default Fermentation;
