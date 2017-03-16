import { REHYDRATE } from 'redux-persist/constants';
import * as actions from '../actions/equipment';

const initialState = {
  // Basic
  name: '',
  recipeType: 'All Grain',
  efficiency: '75',
  batchSize: '5',
  // Mash & Lauter
  mashTunVolume: '',
  mashTunWeight: '',
  mashTunMaterial: '',
  mashTunDeadspace: '0',
  mashThickness: '1.25',
  lauterTunDeadspace: '0',
  mashTempAdjust: false,
  // Boil
  boilTime: '60',
  boilOff: '1',
  boilTopUp: '0',
  // Fermentation
  trubLoss: '0',
  fermenterLoss: '0',
  fermenterTopUp: '0',
  // Advanced
  enableAdvanced: false,
  specificHeat: '',
  boilTemp: '212',
  wortShrinkage: '4',
  grainVolume: '.0783',
  grainAbsorption: '.12',
};

const equipments = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      var incoming = action.payload.equipments; // eslint-disable-line
      if (incoming) return { ...state, ...incoming };
      return {
        ...state,
      };
    case actions.RESET_EQUIPMENT_PROFILE:
      return initialState;
    case actions.EQ_SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case actions.EQ_SET_RECIPE_TYPE:
      return {
        ...state,
        recipeType: action.recipeType,
      };
    case actions.EQ_SET_EFFICIENCY:
      return {
        ...state,
        efficiency: action.efficiency,
      };
    case actions.EQ_SET_BATCH_SIZE:
      return {
        ...state,
        batchSize: action.size,
      };
    case actions.EQ_SET_MASH_TUN_VOLUME:
      return {
        ...state,
        mashTunVolume: action.volume,
      };
    case actions.EQ_SET_MASH_TUN_WEIGHT:
      return {
        ...state,
        mashTunWeight: action.weight,
      };
    case actions.EQ_SET_MASH_TUN_MATERIAL:
      return {
        ...state,
        mashTunMaterial: action.material,
      };
    case actions.EQ_SET_MASH_TUN_DEADSPACE:
      return {
        ...state,
        mashTunDeadspace: action.deadspace,
      };
    case actions.EQ_SET_MASH_THICKNESS:
      return {
        ...state,
        mashThickness: action.thickness,
      };
    case actions.EQ_SET_LAUTER_TUN_DEADSPACE:
      return {
        ...state,
        lauterTunDeadspace: action.deadspace,
      };
    case actions.EQ_SET_MASH_TEMP_ADJUST:
      return {
        ...state,
        mashTempAdjust: action.adjust,
      };
    case actions.EQ_SET_BOIL_TIME:
      return {
        ...state,
        boilTime: action.time,
      };
    case actions.EQ_SET_BOIL_OFF:
      return {
        ...state,
        boilOff: action.boilOff,
      };
    case actions.EQ_SET_BOIL_TOP_UP:
      return {
        ...state,
        boilTopUp: action.topUp,
      };
    case actions.EQ_SET_TRUB_LOSS:
      return {
        ...state,
        trubLoss: action.loss,
      };
    case actions.EQ_SET_FERMENTER_LOSS:
      return {
        ...state,
        fermenterLoss: action.loss,
      };
    case actions.EQ_SET_FERMENTER_TOP_UP:
      return {
        ...state,
        fermenterTopUp: action.topUp,
      };
    case actions.EQ_SET_SPECIFIC_HEAT:
      return {
        ...state,
        specificHeat: action.specificHeat,
      };
    case actions.EQ_SET_BOIL_TEMP:
      return {
        ...state,
        boilTemp: action.temp,
      };
    case actions.EQ_SET_WORT_SHRINKAGE:
      return {
        ...state,
        wortShrinkage: action.shrinkage,
      };
    case actions.EQ_SET_GRAIN_VOLUME:
      return {
        ...state,
        grainVolume: action.volume,
      };
    case actions.EQ_SET_GRAIN_ABSORPTION:
      return {
        ...state,
        grainAbsorption: action.absorption,
      };
    case actions.EQ_SET_ENABLE_ADVANCED:
      return {
        ...state,
        enableAdvanced: action.enable,
      };
    default:
      return state;
  }
};

export default equipments;
