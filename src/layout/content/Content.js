import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateHeader } from '../../actions/ui';

import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import Dashboard from '../../views/dashboard/Dashboard';
import RecipeEdit from '../../views/recipes/views/recipe-edit';
import Calculators from '../../views/calculators/Calculators';
import Brewlog from '../../views/brewlog/Brewlog';
import Equipment from '../../views/equipment/Equipment';
import Settings from '../../views/settings/Settings';
import NotFound from '../../views/not-found/NotFound';

class Content extends React.Component {

  render() {
    const changeHeader = title => this.props.dispatch(updateHeader(title));
    return (
      <div className="main">
        <Header title={this.props.ui.title} />
        <div className="content">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (<Dashboard updateHeader={changeHeader} />)}
            />
            <Route
              path="/recipes"
              render={() => (<RecipeEdit updateHeader={changeHeader} />)}
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
  }
}

Content.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  ui: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
  }),
};


const mapStateToProps = state => ({
  ui: state.ui,
});

export default connect(mapStateToProps)(Content);
