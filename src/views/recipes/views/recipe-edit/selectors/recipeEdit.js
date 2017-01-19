import { createSelector } from 'reselect';

const recipeFermentables = state => state.recipeEdit.recipeStaged.fermentables;
const styles = state => state.data.styles;


// Returns sum weight of all recipe fermentables
const calculateTotalWeight = items => (
  Object.keys(items)
    .reduce((previous, key) => (previous + Number(items[key].weight)), 0)
);

// Returns sum weight of all recipe fermentables
const getStylesDropdown = (items) => {
  if (items) {
    return Object.keys(items).map(item => ({
      label: items[item].name,
      value: items[item].name,
      id: items[item]._id,
    }));
  }
  return [{ label: 'loading...', value: 'loading...' }];
};

export const getTotalWeight = createSelector(
  recipeFermentables,
  calculateTotalWeight,
);

export const getStylesObject = createSelector(
  styles,
  getStylesDropdown,
);
