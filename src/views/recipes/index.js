import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// Components
import RecipeList from './views/recipe-list';
import RecipeEdit from './views/recipe-edit';

class Recipes extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/recipes"
          component={RecipeList}
        />
        <Route
          exact
          path="/recipes/add-new"
          component={RecipeEdit}
        />
        <Route
          exact
          path="/recipes/:recipeId/edit"
          component={RecipeEdit}
        />
      </Switch>
    );
  }
}

Recipes.propTypes = {
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  updateHeader: state.ui.title,
});

export default connect(mapStateToProps)(Recipes);
