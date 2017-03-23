import React from 'react';
import { connect } from 'react-redux';
import findKey from 'lodash/findKey';
import history from '../../../../history';


// components
import Basic from '../../components/Basic';
import Mash from '../../components/Mash';
import Boil from '../../components/Boil';
import Fermentation from '../../components/Fermentation';
import Advanced from '../../components/Advanced';

// actions
import * as actions from '../../actions/equipment';
import { updateHeader } from '../../../../actions/ui';

class EquipmentEdit extends React.Component {

  componentWillMount() {
    this.props.dispatch(updateHeader('Edit Equipment Profile'));

    // load Equipment if not already loaded
    if (this.props.flags.equipmentsLoaded === false) {
      this.props.dispatch(actions.fetchEquipmentList());
    }
  }


  componentWillUpdate(nextProps) {
    const path = this.props.match.path;
    // redirect to 404 if the equipment ID doesn't exist
    if (nextProps.flags.equipmentsLoaded === true) {
      const { equipments } = nextProps;
      const equipmentId = nextProps.match.params.equipmentId;
      const currentProfile = findKey(equipments, { _id: equipmentId });
      if (path === '/equipment/:equipmentId' && !currentProfile) {
        history.push(('/404'));
      }
    }
  }

  handleSave = () => {
    const { dispatch, equipmentStaged } = this.props;
    dispatch(actions.saveEquipmentProfile(equipmentStaged));
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
  equipmentStaged: state.equipmentStaged,
  equipments: state.equipments,
  recipes: state.recipes,
  flags: state.flags,
});

EquipmentEdit.propTypes = {
  dispatch: React.PropTypes.func,
  equipmentStaged: React.PropTypes.object, // eslint-disable-line
  equipmentsLoaded: React.PropTypes.bool,
  flags: React.PropTypes.object, // eslint-disable-line
};

export default connect(mapStateToProps)(EquipmentEdit);
