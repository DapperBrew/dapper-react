import { createSelector } from 'reselect';

const styles = state => state.data.styles;

// Returns sum weight of all recipe fermentables
const getStylesDropdown = items => (
  Object.keys(items).map(item => ({
    label: items[item].name,
    value: items[item]._id,
  }))
);

export const getStylesObject = createSelector(
  styles,
  getStylesDropdown,
);
