import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Abv from './components/Abv';
import CalcList from './components/CalcList';


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
      </Switch>
    );
  }
}

Calculators.propTypes = {
  updateHeader: React.PropTypes.func.isRequired,
};

export default Calculators;
