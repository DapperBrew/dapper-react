import reject from 'lodash/reject';
import * as recipeAction from '../actions/recipeStaged';

const initialState = {
  name: '',
  style: '',
  efficiency: '75',
  batchVolume: '6',
  postBoilVolume: '6.5',
  boilTime: '60',
  recipeType: '',
  fermentables: [],
  hops: [],
  yeasts: [],
  miscs: [],
  efficiencyType: 'brewhouse',
  equipmentProfile: 'default',
  boilVolume: '7.38',
  trubChillerLoss: '.5',
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
    case recipeAction.SET_BATCH_VOLUME:
      return {
        ...state,
        batchVolume: action.volume,
      };
    case recipeAction.SET_POST_BOIL_VOLUME:
      return {
        ...state,
        postBoilVolume: action.volume,
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
    case recipeAction.SET_RECIPE_NOTES:
      return {
        ...state,
        recipeNotes: action.notes,
      };
    case recipeAction.ADD_FERMENTABLE_SUCCESS:
      return {
        ...state,
        fermentables: [
          ...state.fermentables,
          {
            name: action.name,
            key: action.key,
            weight: action.fermentableWeight,
            unit: action.fermentableWeightUnit,
            srm: action.fermentableColor,
            potential: action.fermentablePotential,
            maltster: action.fermentableMaltster,
            type: action.fermentableType,
            inMash: action.inMash,
            afterBoil: action.afterBoil,
          },
        ],
      };
    case recipeAction.EDIT_FERMENTABLE_SUCCESS:
      return {
        ...state,
        fermentables:
          state.fermentables.slice(0, action.itemIndex)
            .concat([{
              name: action.fermentableName,
              key: action.key,
              weight: action.fermentableWeight,
              unit: action.fermentableWeightUnit,
              srm: action.fermentableColor,
              potential: action.fermentablePotential,
              maltster: action.fermentableMaltster,
              type: action.fermentableType,
              inMash: action.fermentableInMash,
              afterBoil: action.fermentableAfterBoil,
            }])
            .concat(state.fermentables.slice(action.itemIndex + 1)),
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
            name: action.name,
            key: action.key,
            weight: action.hopWeight,
            time: action.hopTime,
            stage: action.hopStage,
            type: action.hopType,
            alpha: action.hopAlpha,
          },
        ],
      };
    case recipeAction.REMOVE_HOP:
      return {
        ...state,
        hops: reject(state.hops, { key: action.key }),
      };
    case recipeAction.ADD_YEAST_SUCCESS:
      return {
        ...state,
        yeasts: [
          ...state.yeasts,
          {
            supplier: action.supplier,
            supplierId: action.supplierId,
            name: action.name,
            key: action.key,
            averageAttenuation: action.averageAttenuation,
            minTemp: action.minTemp,
            maxTemp: action.maxTemp,
          },
        ],
      };
    case recipeAction.REMOVE_YEAST:
      return {
        ...state,
        yeasts: reject(state.yeasts, { key: action.key }),
      };
    case recipeAction.ADD_MISC_SUCCESS:
      return {
        ...state,
        miscs: [
          ...state.miscs,
          {
            name: action.name,
            key: action.key,
            amount: action.miscAmount,
            amountUnit: action.miscAmountUnit,
            time: action.miscTime,
            timeUnit: action.miscTimeUnit,
            stage: action.miscStage,
          },
        ],
      };
    case recipeAction.REMOVE_MISC:
      return {
        ...state,
        miscs: reject(state.miscs, { key: action.key }),
      };
    default:
      return state;
  }
};

export default recipeEdit;
