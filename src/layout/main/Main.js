import React from 'react';
import { Match, Miss } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HeaderActionCreators from '../../actions';

import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import Dashboard from '../../views/dashboard/Dashboard';
import RecipeCreate from '../../views/recipes/views/recipe-create/RecipeCreate';
import Calculators from '../../views/calculators/Calculators';
import Brewlog from '../../views/brewlog/Brewlog';
import Equipment from '../../views/equipment/Equipment';
import Settings from '../../views/settings/Settings';
import NotFound from '../../views/not-found/NotFound';

class Main extends React.Component {

  render() {
    return (
      <div className="main">
        <Header title={this.props.header.title} />
        <div className="content">
          <Match
            exactly
            pattern="/"
            render={() => (<Dashboard updateHeader={this.props} />)}
          />
          <Match
            pattern="/recipes"
            render={() => (<RecipeCreate updateHeader={this.props.updateHeader} />)}
          />
          <Match
            pattern="/calculators"
            render={() => (<Calculators updateHeader={this.props.updateHeader} />)}
          />
          <Match
            pattern="/brewlog"
            render={() => (<Brewlog updateHeader={this.props.updateHeader} />)}
          />
          <Match
            pattern="/equipment"
            render={() => (<Equipment updateHeader={this.props.updateHeader} />)}
          />
          <Match
            pattern="/settings"
            render={() => (<Settings updateHeader={this.props.updateHeader} />)}
          />
          <Miss
            render={() => (<NotFound updateHeader={this.props.updateHeader} />)}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  updateHeader: React.PropTypes.func.isRequired,
  header: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
  }),
};


const mapStateToProps = state => ({
  header: state.header,
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(HeaderActionCreators, dispatch);


// const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculators);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
// export default Main;
