import { createSelector } from 'reselect';
import * as calc from 'dapper-calc/build';
import isFinite from 'lodash/isFinite';

const recipeFermentables = state => state.recipeEdit.recipeStaged.fermentables;
const recipeYeasts = state => state.recipeEdit.recipeStaged.yeasts;
const recipeHops = state => state.recipeEdit.recipeStaged.hops;
const styles = state => state.data.styles;
const efficiency = state => state.recipeEdit.recipeStaged.efficiency;
const boilVolume = state => state.recipeEdit.recipeStaged.boilVolume;
const postBoilVolume = state => state.recipeEdit.recipeStaged.postBoilVolume;
const recipeMashTemp = state => state.recipeEdit.recipeStaged.mashTemp;
const equipments = state => state.equipments;

// Returns sum weight of all recipe fermentables
const calcTotalWeight = items => (
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

// Returns array of equipment profiles for equipments dropdown
const getEquipmentsDropdown = (items) => {
  if (items) {
    return Object.keys(items).map(item => ({
      label: items[item].name,
      value: items[item]._id,
    }));
  }
  return [{ label: 'loading...', value: 'loading...' }];
};

// Returns total number of gravity points from staged recipe fermentables
const calcTotalPoints = (items) => {
  if (items) {
    let totalFermentablePoints = 0;
    let totalSugarPoints = 0;
    Object.keys(items).forEach((key) => {
      let weight;
      const type = items[key].type;
      const potential = Number(items[key].potential);
      const points = (potential - 1) * 1000;
      if (items[key].unit === 'oz') {
        weight = items[key].weight / 16;
      } else {
        weight = items[key].weight;
      }
      const totalPoints = points * weight;
      if (type === 'sugar') {
        totalSugarPoints += totalPoints;
      } else {
        totalFermentablePoints += totalPoints;
      }
    });
    return [totalFermentablePoints, totalSugarPoints];
  }
  return 0;
};

// returns the estimated original gravity of a recipe
const calcOriginalGravity = (gravityPoints, eff, volume) => {
  if (isFinite(Number(gravityPoints[0]))
      && isFinite(Number(gravityPoints[1]))
      && Number(eff) > 0
      && Number(volume) > 0
    ) {
    const fGravityPointsNum = Number(gravityPoints[0]);
    const sGravityPointsNum = Number(gravityPoints[1]);
    const effNum = Number(eff);
    const volumeNum = Number(volume);
    const finalCalc = calc.estimateOriginalGravity(
      fGravityPointsNum,
      sGravityPointsNum,
      effNum,
      volumeNum,
    );
    return finalCalc.toFixed(3);
  }
  return 'N/A';
};

// get yeast attenuation (in case of multiple yeasts)
const calcYeastAttenuation = (items) => {
  // set up a default value of 75
  let att = 75;
  if (items) {
    Object.keys(items).forEach((key) => {
      const avAtt = items[key].averageAttenuation;
      if (avAtt > att) att = avAtt;
    });
    return att;
  }
  return 75;
};

// get mash Temp
const calcMashTemp = (temp) => {
  if (isFinite(Number(temp))) {
    return Number(temp);
  }
  return 151;
};

// get estimated final gravity
const calcFinalGravity = (gravityPoints, attenuation, eff, volume, mashTemp) => {
  if (
    isFinite(Number(gravityPoints[0]))
    && isFinite(Number(gravityPoints[1]))
    && isFinite(Number(attenuation))
    && isFinite(Number(eff))
    && isFinite(Number(volume))
    && isFinite(Number(mashTemp))
  ) {
    // Make sure all variables are numbers
    const fgp = Number(gravityPoints[0]);
    const sgp = Number(gravityPoints[1]);
    const attenuationNum = Number(attenuation);
    const effNum = Number(eff);
    const volumeNum = Number(volume);
    const mashTempNum = Number(mashTemp);

    // get Gravity Points of grains (no simple sugars)
    let grainGp = calc.estimateOriginalGravity(
      fgp,
      0,
      effNum,
      volumeNum);
    grainGp = calc.sg2gp(grainGp);

    // get Gravity Points of simple sugars
    let sugarGp = calc.estimateOriginalGravity(
      0,
      sgp,
      effNum,
      volumeNum);
    sugarGp = calc.sg2gp(sugarGp);

    // Use the calculated Gravity points to estimate Final Gravity
    const finalCalc = calc.estimateFinalGravity(
      grainGp,
      sugarGp,
      attenuationNum,
      mashTempNum,
    );

    return finalCalc;
  }
  return 'N/A';
};

// calculate final ABV of beer
const calcABV = (og, fg) => {
  if (isFinite(Number(og)) && isFinite(Number(fg))) {
    const ogNum = Number(og);
    const fgNum = Number(fg);
    return calc.abv(ogNum, fgNum);
  }
  return 0;
};

// calculate pre boil gravity
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
      const aaNum = Number(items[key].alpha);
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
const calcMcu = (items, volume) => {
  if (items) {
    return Object.keys(items).reduce((acc, key) => {
      let weight;
      if (items[key].unit === 'oz') {
        weight = Number(items[key].weight) / 16;
      } else {
        weight = Number(items[key].weight);
      }
      const volumeNum = Number(volume);
      const srm = Number(items[key].srm);
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
  calcTotalWeight,
);

export const getStylesObject = createSelector(
  styles,
  getStylesDropdown,
);

export const getEquipmentsObject = createSelector(
  equipments,
  getEquipmentsDropdown,
);

export const getTotalGravityPoints = createSelector(
  recipeFermentables,
  calcTotalPoints,
);

export const getOriginalGravity = createSelector(
  getTotalGravityPoints,
  efficiency,
  postBoilVolume,
  calcOriginalGravity,
);

export const getPreBoilGravity = createSelector(
  getOriginalGravity,
  postBoilVolume,
  boilVolume,
  calcPreBoilGravity,
);

export const getRecipeIbu = createSelector(
  recipeHops,
  getPreBoilGravity,
  postBoilVolume,
  calcTotalIbu,
);

export const getRecipeMcu = createSelector(
  recipeFermentables,
  postBoilVolume,
  calcMcu,
);

export const getRecipeSrm = createSelector(
  getRecipeMcu,
  calcSrm,
);

export const getYeastAttenuation = createSelector(
  recipeYeasts,
  calcYeastAttenuation,
);

export const getMashTemp = createSelector(
  recipeMashTemp,
  calcMashTemp,
);

export const getFinalGravity = createSelector(
  getTotalGravityPoints,
  getYeastAttenuation,
  efficiency,
  postBoilVolume,
  getMashTemp,
  calcFinalGravity,
);

export const getABV = createSelector(
  getOriginalGravity,
  getFinalGravity,
  calcABV,
);
