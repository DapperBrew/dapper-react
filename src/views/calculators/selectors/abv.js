import { createSelector } from 'reselect';
import * as calc from 'dapper-calc/build';

const originalGravity = state => state.calc.abv.originalGravity;
const finalGravity = state => state.calc.abv.finalGravity;


// calculate final ABV of beer
const calcABV = (og, fg) => {
  if (!og || !fg) {
    return 'N/A';
  }

  if (og <= 0 || og <= 0) {
    return 'N/A';
  }

  if (og < fg) {
    return 'N/A';
  }

  if (isFinite(Number(og)) && isFinite(Number(fg))) {
    const ogNum = Number(og);
    const fgNum = Number(fg);
    return `${calc.abv(ogNum, fgNum).toFixed(2)}%`;
  }
  return 'N/A';
};

// calculate Apparent Extract
const calcApparentExtract = (fg) => {
  if (!fg) {
    return 'N/A';
  }

  if (fg <= 0) {
    return 'N/A';
  }

  if (Number(fg) === 1) {
    return '0.00 Plato';
  }

  if (isFinite(Number(fg))) {
    const fgNum = Number(fg);
    return `${calc.apparentExtract(fgNum).toFixed(2)} Plato`;
  }
  return 'N/A';
};

// calculate Original Extract
const calcOriginalExtract = (og) => {
  if (!og) {
    return 'N/A';
  }

  if (og <= 1) {
    return 'N/A';
  }

  if (isFinite(Number(og))) {
    const ogNum = Number(og);
    return `${calc.originalExtract(ogNum).toFixed(2)} Plato`;
  }
  return 'N/A';
};

// calculate Calories
const calcCalories = (og, fg) => {
  if (!og || !fg) {
    return 'N/A';
  }

  if (og < fg) {
    return 'N/A';
  }

  if (og <= 1 || fg <= 0) {
    return 'N/A';
  }

  if (isFinite(Number(og) && isFinite(Number(fg)))) {
    const ogNum = Number(og);
    const fgNum = Number(fg);
    return `${calc.caloriesTotal(ogNum, fgNum).toFixed(0)}`;
  }

  return 'N/A';
};

// Calculate Apparent Attentuation
const calcApparentAttenuation = (og, fg) => {
  if (!og || !fg) {
    return 'N/A';
  }

  if (og < fg) {
    return 'N/A';
  }

  if (og <= 1 || fg <= 0) {
    return 'N/A';
  }

  if (isFinite(Number(og) && isFinite(Number(fg)))) {
    const ogNum = Number(og);
    const fgNum = Number(fg);
    return `${calc.aAttenuation(ogNum, fgNum).toFixed(1)}%`;
  }

  return 'N/A';
};

export const getABV = createSelector(
  originalGravity,
  finalGravity,
  calcABV,
);

export const getApparentExtract = createSelector(
  finalGravity,
  calcApparentExtract,
);

export const getOriginalExtract = createSelector(
  originalGravity,
  calcOriginalExtract,
);

export const getCalories = createSelector(
  originalGravity,
  finalGravity,
  calcCalories,
);

export const getApparentAttenuation = createSelector(
  originalGravity,
  finalGravity,
  calcApparentAttenuation,
);
