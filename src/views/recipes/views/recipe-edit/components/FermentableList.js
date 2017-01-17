import React from 'react';
import { connect } from 'react-redux';
import uniqueId from 'lodash/uniqueId';
import { getTotalWeight } from '../selectors/recipeEdit';

const FermentableList = props => (
  <tbody>
    {props.recipeFermentables.map((fermentable) => {
      // provide the % of total weight
      const weight = Math.round((fermentable.weight / props.totalWeight) * 100);

      return (
        <tr key={uniqueId()} className="recipe-table__row">
          <td className="recipe-table__cell text-left">{props.fermentables[fermentable.id].name}</td>
          <td className="recipe-table__cell text-right">{fermentable.weight} lb</td>
          <td className="recipe-table__cell text-right">{props.fermentables[fermentable.id].srm} SRM</td>
          <td className="recipe-table__cell text-right">{weight}%</td>
          <td className="recipe-table__cell recipe-table__cell--shrink text-right">O  X</td>
        </tr>
      );
    })}
  </tbody>
);

const mapStateToProps = state => ({
  fermentables: state.ingredients.fermentables,
  recipeFermentables: state.recipeEdit.recipeStaged.fermentables,
  totalWeight: getTotalWeight(state),
});

FermentableList.propTypes = {
  recipeFermentables: React.PropTypes.array.isRequired, // eslint-disable-line
  fermentables: React.PropTypes.object.isRequired, // eslint-disable-line
};

export default connect(mapStateToProps)(FermentableList);
