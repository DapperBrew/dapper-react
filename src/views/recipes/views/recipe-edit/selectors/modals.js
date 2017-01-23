import { createSelector } from 'reselect';

const hops = state => state.data.hops;
const fermentables = state => state.data.fermentables;


// return hops array with correct information for add hop modalInfo
const getHopsInfo = (items) => {
  // returns string for if hop type is Bittering, Aroma or both
  const getType = (hop) => {
    if (items[hop].isAroma && items[hop].isBittering) {
      return 'Both';
    } else if (items[hop].isAroma) {
      return 'Aroma';
    } else if (items[hop].isBittering) {
      return 'Bittering';
    }
    return 'N/A';
  };

  if (items) {
    return Object.keys(items).map((item) => {
      // gets the average of the min and max AA
      const alpha = (items[item].alphaAcidMin + items[item].alphaAcidMax) / 2;
      return {
        name: items[item].name,
        _id: items[item]._id,
        alpha: `${alpha}%`,
        type: getType(item),
      };
    });
  }
  return [{ name: 'loading...', alpha: 'loading...', type: 'loading...' }];
};

const getFermentablesInfo = (items) => {
  if (items) {
    return Object.keys(items).map(item => ({
      name: items[item].name,
      _id: items[item]._id,
      type: items[item].type,
      srm: `${items[item].srm} SRM`,
    }));
  }
  return [{ name: '...loading', type: '...loading', color: '...loading' }];
};

export const getHopList = createSelector(
  hops,
  getHopsInfo,
);

export const getFermentableList = createSelector(
  fermentables,
  getFermentablesInfo,
);
