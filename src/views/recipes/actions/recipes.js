import axios from 'axios';

// constants
export const SAVE_RECIPE_REQUEST = 'SAVE_RECIPE_REQUEST';
export const SAVE_RECIPE_SUCCESS = 'SAVE_RECIPE_SUCCESS';
export const SAVE_RECIPE_ERROR = 'SAVE_RECIPE_ERROR';


export const saveRecipeRequest = () => ({
  type: SAVE_RECIPE_REQUEST,
});

export const saveRecipeSuccess = (recipeStaged, id) => ({
  type: SAVE_RECIPE_SUCCESS,
  recipeStaged,
  id,
});

export const saveRecipeError = error => ({
  type: SAVE_RECIPE_ERROR,
  error,
});

export const saveRecipe = recipeStaged => (
  (dispatch) => {
    dispatch(saveRecipeRequest());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/recipes`,
      headers: { authorization: localStorage.getItem('token') },
      method: 'post',
      data: recipeStaged,
    })
      .then(res => dispatch(saveRecipeSuccess(recipeStaged, res.data.id)))
      .catch((response) => {
        dispatch(saveRecipeError(response.data));
        throw response;
      });
  }
);
