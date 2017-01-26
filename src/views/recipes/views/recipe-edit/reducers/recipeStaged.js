import reject from 'lodash/reject';
import * as recipeAction from '../actions/recipeStaged';

const initialState = {
  name: '',
  style: '',
  efficiency: '75',
  boilVolume: '7.25',
  batchSize: '6',
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
    case recipeAction.SET_BOIL_VOLUME:
      return {
        ...state,
        boilVolume: action.volume,
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
    case recipeAction.ADD_HOP_SUCCESS:
      return {
        ...state,
        hops: [
          ...state.hops,
          {
            id: action.id,
            key: action.key,
            weight: action.hopWeight,
            time: action.hopTime,
            stage: action.hopStage,
            type: action.hopType,
            aa: action.hopAA,
          },
        ],
      };
    case recipeAction.REMOVE_HOP:
      return {
        ...state,
        hops: reject(state.hops, { key: action.key }),
      };
    default:
      return state;
  }
};

export default recipeEdit;
