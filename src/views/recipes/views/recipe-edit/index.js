import PropTypes from 'prop-types';
import React from 'react';
import find from 'lodash/find';
import findKey from 'lodash/findKey';
import { connect } from 'react-redux';

// Components
import RecipeInfo from './components/RecipeInfo';
import Fermentables from './components/Fermentables';
import Hops from './components/Hops';
import Misc from './components/Misc';
import Yeast from './components/Yeast';
import Stats from './components/Stats';
import StyleGuide from './components/StyleGuide';
import Notes from './components/Notes';
import Mash from './components/Mash';


// actions
import { updateHeader } from '../../../../actions/ui';
import { saveRecipe, fetchSingleRecipe, editRecipe } from '../../actions/recipes';
import { resetStaged, loadStaged, setStagedMode } from '.././recipe-edit/actions/recipeStaged';

class RecipeEdit extends React.Component {
  componentWillMount() {
    const path = this.props.match.path;
    const { dispatch } = this.props;
    const recipeId = this.props.match.params.recipeId;
    const mode = this.props.recipeStaged.mode;

    // determine if the recipe is in "edit" or "create new" mode
    if (path === '/recipes/:recipeId/edit') {
      dispatch(updateHeader('Edit Recipe'));
      dispatch(setStagedMode('edit'));
      const selectedRecipe = find(this.props.recipes, { _id: recipeId });

      // if the recipe is saved in props, load from there
      // otherwise make an API call to load it.
      if (selectedRecipe) {
        dispatch(loadStaged(selectedRecipe));
      } else {
        dispatch(resetStaged());
        dispatch(fetchSingleRecipe(recipeId));
      }
    } else {
      dispatch(updateHeader('Create Recipe'));
      // if this page was previously an "edit" page then clear values
      if (mode === 'edit') {
        dispatch(resetStaged());
      }
      dispatch(setStagedMode('create'));
    }
  }

  handleSaveRecipe = () => {
    this.props.dispatch(saveRecipe(this.props.recipeStaged));
  }

  handleEditRecipe = () => {
    // get the index of the recipe to pass to the editRecipe dispatcher
    // (later used to splice in the updated Recipe)
    const recipeId = this.props.match.params.recipeId;
    const { recipes, dispatch, recipeStaged } = this.props;
    const itemIndex = findKey(recipes, { _id: recipeId });


    dispatch(editRecipe(recipeId, recipeStaged, itemIndex));
  }

  handleResetStaged = () => {
    this.props.dispatch(resetStaged());
  }

  renderSubmitButtons = () => {
    if (this.props.match.path === '/recipes/:recipeId/edit') {
      return (
        <div>
          <button onClick={this.handleEditRecipe} className="button button--primary">Update Recipe</button>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.handleSaveRecipe} className="button button--primary">Save Recipe</button>
        <button onClick={this.handleResetStaged} className="ml1 button button--secondary">Clear Recipe</button>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <RecipeInfo />
        <div className="input-column">
          <Fermentables />
          <Hops />
          <Yeast />
          <Misc />
          <Mash />
          <div className="hide-mobile">{this.renderSubmitButtons()}</div>
        </div>
        <div className="info-column">
          <Stats />
          <StyleGuide />
          <Notes />
        </div>
        <div className="hide-desktop">{this.renderSubmitButtons()}</div>

      </div>
    );
  }
}

RecipeEdit.propTypes = {
  dispatch: PropTypes.func.isRequired,
  recipeStaged: PropTypes.object, // eslint-disable-line
  match: PropTypes.object, // eslint-disable-line
  recipes: PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  recipeStaged: state.recipeEdit.recipeStaged,
  recipes: state.recipes,
});

export default connect(mapStateToProps)(RecipeEdit);
