import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Abv from './components/Abv';
import CalcList from './components/CalcList';
import NotFound from '../../views/not-found/NotFound';


class Calculators extends React.Component {

  componentWillMount() {
    this.props.updateHeader('Calculators');
  }


  render() {
    return (
      <Switch>
        <Route
          exact
          path="/calculators"
          component={CalcList}
        />
        <Route
          exact
          path="/calculators/abv"
          component={Abv}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

Calculators.propTypes = {
  updateHeader: PropTypes.func.isRequired,
};

export default Calculators;
