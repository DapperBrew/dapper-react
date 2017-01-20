import reject from 'lodash/reject';
import * as recipeAction from '../actions/recipeStaged';

const initialState = {
  name: '',
  style: '',
  efficiency: '',
  boilTime: '',
  batchSize: '',
  recipeType: '',
  fermentables: [],
  hops: [],
};

const recipeEdit = (state = initialState, action) => {
  switch (action.type) {
    case recipeAction.SET_STYLE:
      return {
        ...state,
        style: action.style,
      };
    case recipeAction.SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case recipeAction.SET_EFFICIENCY:
      return {
        ...state,
        efficiency: action.eff,
      };
    case recipeAction.SET_BOIL_TIME:
      return {
        ...state,
        boilTime: action.time,
      };
    case recipeAction.SET_BATCH_SIZE:
      return {
        ...state,
        batchSize: action.size,
      };
    case recipeAction.SET_RECIPE_TYPE:
      return {
        ...state,
        recipeType: action.recipeType,
      };
    case recipeAction.ADD_FERMENTABLE_SUCCESS:
      return {
        ...state,
        fermentables: [
          ...state.fermentables,
          {
            id: action.id,
            key: action.key,
            weight: action.weight,
            unit: action.unit,
          },
        ],
      };
    case recipeAction.REMOVE_FERMENTABLE:
      return {
        ...state,
        fermentables: reject(state.fermentables, { key: action.key }),
      };
    default:
      return state;
  }
};

export default recipeEdit;
