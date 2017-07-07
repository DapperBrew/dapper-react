import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateHeader } from '../../actions/ui';

import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import Dashboard from '../../views/dashboard/Dashboard';
import Recipes from '../../views/recipes';
import Calculators from '../../views/calculators';
import Brewlog from '../../views/brewlog/Brewlog';
import Equipment from '../../views/equipment';
import Settings from '../../views/settings/Settings';
import NotFound from '../../views/not-found/NotFound';
import Hamburger from '../../components/Hamburger';

const Content = (props) => {
  const changeHeader = title => props.dispatch(updateHeader(title));
  return (
    <div className="main">
      <Hamburger />
      <Header title={props.ui.title} />
      <div className="content">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (<Dashboard updateHeader={changeHeader} />)}
          />
          <Route
            path="/recipes"
            render={() => (<Recipes updateHeader={changeHeader} />)}
          />
          <Route
            path="/calculators"
            render={() => (<Calculators updateHeader={changeHeader} />)}
          />
          <Route
            path="/brewlog"
            render={() => (<Brewlog updateHeader={changeHeader} />)}
          />
          <Route
            path="/equipment"
            render={() => (<Equipment updateHeader={changeHeader} />)}
          />
          <Route
            path="/settings"
            render={() => (<Settings updateHeader={changeHeader} />)}
          />
          <Route
            render={() => (<NotFound updateHeader={changeHeader} />)}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

Content.propTypes = {
  ui: PropTypes.shape({ // eslint-disable-line
    title: PropTypes.string.isRequired,
  }),
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  ui: state.ui,
});

export default connect(mapStateToProps)(Content);
