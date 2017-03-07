import React from 'react';
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
import { saveRecipe } from '../../actions/recipes';
import { resetStaged } from '.././recipe-edit/actions/recipeStaged';

class RecipeEdit extends React.Component {
  componentWillMount() {
    this.props.dispatch(updateHeader('Create Recipe'));
  }

  handleSaveRecipe = () => {
    this.props.dispatch(saveRecipe(this.props.recipeStaged));
  }

  handleResetStaged = () => {
    this.props.dispatch(resetStaged());
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
          <button onClick={this.handleSaveRecipe} className="button button--primary">Save Recipe</button>
          <button onClick={this.handleResetStaged} className="ml1 button button--secondary">Clear Recipe</button>
        </div>
        <div className="info-column">
          <Stats />
          <StyleGuide />
          <Notes />
        </div>
      </div>
    );
  }
}

RecipeEdit.propTypes = {
  dispatch: React.PropTypes.func,
  recipeStaged: React.PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  recipeStaged: state.recipeEdit.recipeStaged,
});

export default connect(mapStateToProps)(RecipeEdit);
