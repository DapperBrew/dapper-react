import React from 'react';
import { connect } from 'react-redux';


// components
import Basic from '../../components/Basic';
import Mash from '../../components/Mash';
import Boil from '../../components/Boil';
import Fermentation from '../../components/Fermentation';
import Advanced from '../../components/Advanced';

// actions
import * as actions from '../../actions/equipment';

class EquipmentEdit extends React.Component {

  handleSave = () => {
    const { dispatch, equipments } = this.props;
    dispatch(actions.saveEquipmentProfile(equipments));
  }

  handleReset = () => {
    const { dispatch } = this.props;
    dispatch(actions.resetEquipmentProfile());
  }

  render() {
    return (
      <div className="container">
        <Basic />
        <Mash />
        <Boil />
        <Fermentation />
        <Advanced />
        <div className="col-md-12">
          <button onClick={this.handleSave} className="button button--primary">Save</button>
          <button onClick={this.handleReset} className="button button--secondary ml1">Reset</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  equipments: state.equipments,
});

EquipmentEdit.propTypes = {
  dispatch: React.PropTypes.func,
  equipments: React.PropTypes.object, // eslint-disable-line
};

export default connect(mapStateToProps)(EquipmentEdit);
