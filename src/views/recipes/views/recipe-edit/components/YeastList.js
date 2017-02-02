import React from 'react';
import { connect } from 'react-redux';
import { removeYeast } from '../actions/recipeStaged';

// components
import EditIcons from './EditIcons';

const YeastList = props => (
  <tbody>
    {props.recipeYeasts.map((yeast) => {
      const { dispatch, yeasts } = props;
      const selYeast = yeasts[yeast.id];
      const { name, supplier, supplierId, fermentTempMin, fermentTempMax } = selYeast;
      const averageFermentTemp = ((fermentTempMin + fermentTempMax) / 2).toFixed(0);
      return (
        <tr key={yeast.key} className="recipe-table__row">
          <td className="recipe-table__cell text-left">{`${name} (${supplier} ${supplierId})`}</td>
          <td className="recipe-table__cell text-right">{averageFermentTemp} F</td>
          <td className="recipe-table__cell text-right">{yeast.averageAttenuation}%</td>
          <EditIcons removeItem={() => dispatch(removeYeast(yeast.key))} />
        </tr>
      );
    })}
  </tbody>
);

const mapStateToProps = state => ({
  yeasts: state.data.yeasts,
  recipeYeasts: state.recipeEdit.recipeStaged.yeasts,
  recipeStaged: state.recipeEdit.recipeStaged,
});

YeastList.propTypes = {
  recipeYeasts: React.PropTypes.array.isRequired, // eslint-disable-line
};

export default connect(mapStateToProps)(YeastList);
