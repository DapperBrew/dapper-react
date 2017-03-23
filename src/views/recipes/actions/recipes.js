import axios from 'axios';
import { normalize } from 'normalizr';
import * as schema from './schemas';
import history from '../../../history';

// import outside actions
import { resetStaged, loadStaged } from '../views/recipe-edit/actions/recipeStaged';

// constants
export const SAVE_RECIPE_REQUEST = 'SAVE_RECIPE_REQUEST';
export const SAVE_RECIPE_SUCCESS = 'SAVE_RECIPE_SUCCESS';
export const SAVE_RECIPE_ERROR = 'SAVE_RECIPE_ERROR';

export const RECIPES_REQUEST = 'RECIPES_REQUEST';
export const RECIPES_SUCCESS = 'RECIPES_SUCCESS';
export const RECIPES_ERROR = 'RECIPES_ERROR';

export const SINGLE_RECIPE_REQUEST = 'SINGLE_RECIPE_REQUEST';
export const SINGLE_RECIPE_SUCCESS = 'SINGLE_RECIPE_SUCCESS';
export const SINGLE_RECIPE_ERROR = 'SINGLE_RECIPE_ERROR';

export const EDIT_RECIPE_REQUEST = 'EDIT_RECIPE_REQUEST';
export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS';
export const EDIT_RECIPE_ERROR = 'EDIT_RECIPE_ERROR';

export const CLEAR_RECIPES = 'CLEAR_RECIPES';

export const clearRecipes = () => ({
  type: CLEAR_RECIPES,
});

export const requestEditRecipe = () => ({
  type: EDIT_RECIPE_REQUEST,
});

export const successEditRecipe = (recipe, itemIndex) => ({
  type: EDIT_RECIPE_SUCCESS,
  recipe,
  itemIndex,
});

export const errorEditRecipe = error => ({
  type: EDIT_RECIPE_ERROR,
  error,
});

export const requestRecipes = () => ({
  type: RECIPES_REQUEST,
});

export const receiveRecipes = recipes => ({
  type: RECIPES_SUCCESS,
  recipes,
});

export const errorRecipes = error => ({
  type: RECIPES_ERROR,
  error,
});

export const requestSingleRecipe = () => ({
  type: SINGLE_RECIPE_REQUEST,
});

export const receiveSingleRecipe = () => ({
  type: SINGLE_RECIPE_SUCCESS,
});

export const errorSingleRecipe = error => ({
  type: SINGLE_RECIPE_ERROR,
  error,
});

export const fetchRecipes = () => (
  (dispatch, getState) => {
    const userId = getState().user.id;
    dispatch(requestRecipes());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/users/${userId}/recipes`,
      headers: { authorization: localStorage.getItem('token') },
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    })
      .then(response => normalize(response.data, schema.recipeListSchema))
      .then(response => dispatch(receiveRecipes(response)))
      .catch((err) => {
        dispatch(errorRecipes(err));
        console.error(err);
      });
  }
);

export const editRecipe = (recipeId, recipe, itemIndex) => (
  (dispatch) => {
    dispatch(requestEditRecipe());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/recipes/${recipeId}`,
      headers: { authorization: localStorage.getItem('token') },
      timeout: 20000,
      method: 'put',
      data: {
        recipeId,
        recipe,
      },
    })
      .then(() => {
        dispatch(successEditRecipe(recipe, itemIndex));
        dispatch(resetStaged());
        history.push(('/recipes'));
      })
      .catch((err) => {
        dispatch(errorRecipes(err));
        console.error(err);
      });
  }
);

export const fetchSingleRecipe = recipeId => (
  (dispatch) => {
    dispatch(requestSingleRecipe());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/recipes/${recipeId}`,
      headers: { authorization: localStorage.getItem('token') },
      timeout: 20000,
      method: 'get',
      responseType: 'json',
    })
      .then(response => dispatch(loadStaged(response.data)))
      .then(dispatch(receiveSingleRecipe()))
      .catch((err) => {
        dispatch(errorRecipes(err));
        console.error(err);
      });
  }
);

export const saveRecipeRequest = () => ({
  type: SAVE_RECIPE_REQUEST,
});

export const saveRecipeSuccess = (recipe, id) => ({
  type: SAVE_RECIPE_SUCCESS,
  recipe,
  id,
});

export const saveRecipeError = error => ({
  type: SAVE_RECIPE_ERROR,
  error,
});

export const saveRecipe = recipeStaged => (
  (dispatch, getState) => {
    const userId = getState().user.id;
    dispatch(saveRecipeRequest());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/recipes`,
      headers: { authorization: localStorage.getItem('token') },
      method: 'post',
      data: {
        ...recipeStaged,
        userId,
      },
    })
      .then((res) => {
        dispatch(saveRecipeSuccess(res.data.recipe, res.data.id));
        dispatch(resetStaged());
        history.push(('/recipes'));
      })
      .catch((response) => {
        dispatch(saveRecipeError(response.data));
        throw response;
      });
  }
);
