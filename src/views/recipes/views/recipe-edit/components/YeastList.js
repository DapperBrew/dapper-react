import React from 'react';
import { connect } from 'react-redux';

// actions
import { removeYeast } from '../actions/recipeStaged';
import { showEditModal } from '../actions/modals';

// components
import EditIcons from './EditIcons';

const YeastList = props => (
  <tbody>
    {props.recipeYeasts.map((yeast) => {
      const { dispatch } = props;
      const { name, supplier, supplierId } = yeast;
      const averageFermentTemp = ((Number(yeast.minTemp) + Number(yeast.maxTemp)) / 2).toFixed(0);
      return (
        <tr key={yeast.key} className="recipe-table__row">
          <td className="recipe-table__cell text-left">{`${name} (${supplier} ${supplierId})`}</td>
          <td className="recipe-table__cell text-right">{averageFermentTemp} F</td>
          <td className="recipe-table__cell text-right">{yeast.averageAttenuation}%</td>
          <EditIcons
            removeItem={() => dispatch(removeYeast(yeast.key))}
            editItem={() => dispatch(showEditModal('editYeast', yeast.key))}
          />
        </tr>
      );
    })}
  </tbody>
);

const mapStateToProps = state => ({
  recipeYeasts: state.recipeEdit.recipeStaged.yeasts,
  recipeStaged: state.recipeEdit.recipeStaged,
});

YeastList.propTypes = {
  recipeYeasts: React.PropTypes.array.isRequired, // eslint-disable-line
};

export default connect(mapStateToProps)(YeastList);
