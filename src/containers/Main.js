import React from 'react';
import { Match, Miss } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HeaderActionCreators from '../actions';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';
import RecipeCreate from '../components/RecipeCreate';
import Calculators from '../components/Calculators';
import Brewlog from '../components/Brewlog';
import Equipment from '../components/Equipment';
import Settings from '../components/Settings';
import NotFound from '../components/NotFound';

class Main extends React.Component {

  render() {
    return (
      <div className="main">
        <Header props={this.props} />
        <div className="content">
          <Match
            exactly
            pattern="/"
            render={() => (<Dashboard updateHeader={this.props.updateHeader} />)}
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
            component={NotFound}
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
};


const mapStateToProps = state => ({
  header: state.header,
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(HeaderActionCreators, dispatch);


// const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculators);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
// export default Main;
