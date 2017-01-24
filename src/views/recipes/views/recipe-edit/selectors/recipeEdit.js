import { createSelector } from 'reselect';
import * as calc from 'dapper-calc/build';
import isFinite from 'lodash/isFinite';

const recipeFermentables = state => state.recipeEdit.recipeStaged.fermentables;
const fermentables = state => state.data.fermentables;
const styles = state => state.data.styles;
const efficiency = state => state.recipeEdit.recipeStaged.efficiency;
const batchSize = state => state.recipeEdit.recipeStaged.batchSize;


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
      const potential = allFermentables[items[key].id].potential;
      const points = (potential - 1) * 1000;
      const weight = items[key].weight;
      const totalPoints = points * weight;
      return totalPoints;
    }, 0);
  }
  return 0;
};

// returns the estimated original gravity of a recipe
const calcOriginalGravity = (gravityPoints, eff, finalVolume) => {
  if (isFinite(Number(gravityPoints)) && isFinite(Number(eff)) && isFinite(Number(finalVolume))) {
    const gravityPointsNum = Number(gravityPoints);
    const effNum = Number(eff);
    const finalVolumeNum = Number(finalVolume);
    const finalCalc = calc.estimateOriginalGravity(gravityPointsNum, effNum, finalVolumeNum);
    return finalCalc.toFixed(3);
  }
  return 'N/A';
};

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
  batchSize,
  calcOriginalGravity,
);
