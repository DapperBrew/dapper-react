import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import RecipeList from './views/recipe-list';
import RecipeEdit from './views/recipe-edit';
import NotFound from '../../views/not-found/NotFound';

class Recipes extends React.Component {

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
        <Route component={NotFound} />
      </Switch>
    );
  }
}

Recipes.propTypes = {
};

export default Recipes;
