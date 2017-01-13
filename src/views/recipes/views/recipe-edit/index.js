/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

import RecipeInfo from './components/RecipeInfo';
import Fermentables from './components/Fermentables';
import Hops from './components/Hops';
import Misc from './components/Misc';
import Yeast from './components/Yeast';

import { fetchIngredients } from './actions/loadData';


// DELETE LATER
import Card from '../../../../components/Card';

class RecipeEdit extends React.Component {

  componentWillMount(dispatch) {
    this.props.updateHeader('Create Recipe');
    this.props.dispatch(fetchIngredients());
  }

  render() {
    return (
      <div className="container">
        <RecipeInfo />
        <div className="input-column">
          <Fermentables />
        </div>
        <div className="info-column">
          <Card cardTitle="Stats" />
          <Card cardTitle="Style Guide" />
        </div>
      </div>
    );
  }
}

RecipeEdit.propTypes = {
  updateHeader: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});

export default connect(mapStateToProps)(RecipeEdit);
