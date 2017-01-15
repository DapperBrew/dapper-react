import React from 'react';
import { Match, Miss } from 'react-router';
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

class Main extends React.Component {

  render() {
    const changeHeader = title => this.props.dispatch(updateHeader(title));
    return (
      <div className="main">
        <Header title={this.props.ui.title} />
        <div className="content">
          <Match
            exactly
            pattern="/"
            render={() => (<Dashboard updateHeader={changeHeader} />)}
          />
          <Match
            pattern="/recipes"
            render={() => (<RecipeEdit updateHeader={changeHeader} />)}
          />
          <Match
            pattern="/calculators"
            render={() => (<Calculators updateHeader={changeHeader} />)}
          />
          <Match
            pattern="/brewlog"
            render={() => (<Brewlog updateHeader={changeHeader} />)}
          />
          <Match
            pattern="/equipment"
            render={() => (<Equipment updateHeader={changeHeader} />)}
          />
          <Match
            pattern="/settings"
            render={() => (<Settings updateHeader={changeHeader} />)}
          />
          <Miss
            render={() => (<NotFound updateHeader={changeHeader} />)}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  ui: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
  }),
};


const mapStateToProps = state => ({
  ui: state.ui,
});

export default connect(mapStateToProps)(Main);
