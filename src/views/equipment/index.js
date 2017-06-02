import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import EquipmentList from './views/EquipmentList';
import EquipmentEdit from './views/EquipmentEdit';
import NotFound from '../../views/not-found/NotFound';

class Equipment extends React.Component {

  componentWillMount() {
    this.props.updateHeader('Equipment');
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/equipment"
          component={EquipmentList}
        />
        <Route
          exact
          path="/equipment/add-new"
          component={EquipmentEdit}
        />
        <Route
          exact
          path="/equipment/:equipmentId"
          component={EquipmentEdit}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

Equipment.propTypes = {
  updateHeader: PropTypes.func.isRequired,
};

export default Equipment;
