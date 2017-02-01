import { createSelector } from 'reselect';
import * as calc from 'dapper-calc/build';
import isFinite from 'lodash/isFinite';

const recipeFermentables = state => state.recipeEdit.recipeStaged.fermentables;
const recipeHops = state => state.recipeEdit.recipeStaged.hops;
const fermentables = state => state.data.fermentables;
const styles = state => state.data.styles;
const efficiency = state => state.recipeEdit.recipeStaged.efficiency;
const boilVolume = state => state.recipeEdit.recipeStaged.boilVolume;
const postBoilVolume = state => state.recipeEdit.recipeStaged.postBoilVolume;

// Returns sum weight of all recipe fermentables
const calculateTotalWeight = items => (
  Object.keys(items)
    .reduce((previous, key) => (previous + Number(items[key].weight)), 0)
);

// Returns array of styles for styles dropdown
const getStylesDropdown = (items) => {
  if (items) {
    return Object.keys(items).map(item => ({
      label: items[item].name,
      value: items[item]._id,
    }));
  }
  return [{ label: 'loading...', value: 'loading...' }];
};

// Returns total number of gravity points from staged recipe fermentables
const getTotalPoints = (allFermentables, items) => {
  if (items) {
    return Object.keys(items).reduce((acc, key) => {
      let weight;
      const potential = allFermentables[items[key].id].potential;
      const points = (potential - 1) * 1000;
      if (items[key].unit === 'oz') {
        weight = items[key].weight / 16;
      } else {
        weight = items[key].weight;
      }
      const totalPoints = points * weight;
      return acc + totalPoints;
    }, 0);
  }
  return 0;
};

// returns the estimated original gravity of a recipe
const calcOriginalGravity = (gravityPoints, eff, volume) => {
  if (
      isFinite(Number(gravityPoints))
      && Number(eff) > 0
      && Number(volume) > 0
    ) {
    const gravityPointsNum = Number(gravityPoints);
    const effNum = Number(eff);
    const VolumeNum = Number(volume);
    const finalCalc = calc.estimateOriginalGravity(gravityPointsNum, effNum, VolumeNum);
    return finalCalc.toFixed(3);
  }
  return 'N/A';
};

const calcPreBoilGravity = (og, volume, preBoilVolume) => {
  if (og > 0 && volume > 0 && preBoilVolume > 0) {
    const volumeAdd = Number(preBoilVolume) - Number(volume);
    return calc.dilute(Number(og), Number(volume), volumeAdd);
  }
  return 0;
};


// returns total IBUs (added from all recipe hops)
const calcTotalIbu = (items, gravity, volume) => {
  if (items) {
    return Object.keys(items).reduce((acc, key) => {
      const weightNum = Number(items[key].weight);
      const type = items[key].type;
      const aaNum = Number(items[key].aa);
      const timeNum = Number(items[key].time);
      const gravityNum = Number(gravity);
      const volumeNum = Number(volume);
      let adjust;
      if (type === 'pellet') {
        adjust = 10;
      }
      const hopIBU = calc.ibu(weightNum, aaNum, timeNum, gravityNum, volumeNum, adjust);
      const hopIBURound = Math.round(hopIBU);
      return acc + hopIBURound;
    }, 0);
  }
  return 0;
};

// returns total MCU for beer from recipe Fermentables
const calcMcu = (allFermentables, items, volume) => {
  if (items) {
    return Object.keys(items).reduce((acc, key) => {
      let weight;
      if (items[key].unit === 'oz') {
        weight = Number(items[key].weight) / 16;
      } else {
        weight = Number(items[key].weight);
      }
      const volumeNum = Number(volume);
      const srm = Number(allFermentables[items[key].id].srm);
      // const lovi = calc.srm2lovibond(srm);
      // for now, Dapper assumes that as a MALT (not wort) lovi = srm
      const mcu = calc.mcu(weight, srm, volumeNum);
      return acc + mcu;
    }, 0);
  }
  return 0;
};

const calcSrm = mcu => calc.srm(mcu);

export const getTotalWeight = createSelector(
  recipeFermentables,
  calculateTotalWeight,
);

export const getStylesObject = createSelector(
  styles,
  getStylesDropdown,
);

export const totalGravityPoints = createSelector(
  fermentables,
  recipeFermentables,
  getTotalPoints,
);

export const estimateOriginalGravity = createSelector(
  totalGravityPoints,
  efficiency,
  postBoilVolume,
  calcOriginalGravity,
);

export const getBoilGravity = createSelector(
  estimateOriginalGravity,
  postBoilVolume,
  boilVolume,
  calcPreBoilGravity,
);

export const getRecipeIbu = createSelector(
  recipeHops,
  getBoilGravity,
  postBoilVolume,
  calcTotalIbu,
);

export const getRecipeMcu = createSelector(
  fermentables,
  recipeFermentables,
  postBoilVolume,
  calcMcu,
);

export const getRecipeSrm = createSelector(
  getRecipeMcu,
  calcSrm,
);
