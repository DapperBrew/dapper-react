import reject from 'lodash/reject';
import * as recipeAction from '../actions/recipeStaged';

const initialState = {
  name: '',
  style: '',
  efficiency: '75',
  finalVolume: 6,
  boilTime: '60',
  recipeType: '',
  fermentables: [],
  hops: [],
  efficiencyType: 'brewhouse',
  equipmentProfile: 'default',
  boilVolume: '7.25',
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
    case recipeAction.SET_EQUIPMENT_PROFILE:
      return {
        ...state,
        equipmentProfile: action.profile,
      };
    case recipeAction.SET_EFFICIENCY:
      return {
        ...state,
        efficiency: action.eff,
      };
    case recipeAction.SET_EFFICIENCY_TYPE:
      return {
        ...state,
        efficiencyType: action.eff,
      };
    case recipeAction.SET_BOIL_VOLUME:
      return {
        ...state,
        boilVolume: action.volume,
      };
    case recipeAction.SET_FINAL_VOLUME:
      return {
        ...state,
        finalVolume: action.volume,
      };
    case recipeAction.SET_BOIL_TIME:
      return {
        ...state,
        boilTime: action.time,
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
