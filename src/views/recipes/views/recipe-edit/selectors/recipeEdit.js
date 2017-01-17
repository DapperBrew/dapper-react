import { createSelector } from 'reselect';

const recipeFermentables = state => state.recipeEdit.recipeStaged.fermentables;

// Returns sum weight of all recipe fermentables
const calculateTotalWeight = items => (
  Object.keys(items)
    .reduce((previous, key) => (previous + Number(items[key].weight)), 0)
);

export const getTotalWeight = createSelector(
  recipeFermentables,
  calculateTotalWeight,
);
