import PropTypes from 'prop-types';
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
    const path = this.props.match.path;
    const { dispatch, equipments } = this.props;
    const equipmentId = this.props.match.params.equipmentId;
    const mode = this.props.equipmentStaged.mode;

    // update headeer

    // determine if this is "edit" or "Crete new" mode
    if (path === '/equipment/:equipmentId') {
      dispatch(updateHeader('Edit Equipment Profile'));
      dispatch(actions.setEqStagedMode('edit'));
      const selectedEquipment = equipments[equipmentId];
      dispatch(actions.loadEqStaged(selectedEquipment));
    } else {
      dispatch(updateHeader('Create Equipment Profile'));
      // if this page was previously on an "edit" page then clear values
      if (mode === 'edit') {
        dispatch(actions.resetEquipmentProfile());
      }
      dispatch(actions.setEqStagedMode('create'));
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

  handleEdit = () => {
    const equipmentId = this.props.match.params.equipmentId;
    const { equipments, dispatch, equipmentStaged } = this.props;
    const itemIndex = findKey(equipments, { _id: equipmentId });

    dispatch(actions.editEquipmentProfile(equipmentId, equipmentStaged, itemIndex));
  }

  handleReset = () => {
    const { dispatch } = this.props;
    dispatch(actions.resetEquipmentProfile());
  }

  renderSubmitButtons = () => {
    if (this.props.match.path === '/equipment/:equipmentId') {
      return (
        <div>
          <button onClick={this.handleEdit} className="button button--primary">Update</button>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.handleSave} className="button button--primary">Save</button>
        <button onClick={this.handleReset} className="button button--secondary ml1">Reset</button>
      </div>
    );
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
          {this.renderSubmitButtons()}
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
  dispatch: PropTypes.func.isRequired,
  equipmentStaged: PropTypes.object, // eslint-disable-line
  flags: PropTypes.object, // eslint-disable-line
  match: PropTypes.object, // eslint-disable-line
  equipments: PropTypes.object, // eslint-disable-line
  path: PropTypes.string,
};

EquipmentEdit.defaultProps = {
  path: '',
};

export default connect(mapStateToProps)(EquipmentEdit);
