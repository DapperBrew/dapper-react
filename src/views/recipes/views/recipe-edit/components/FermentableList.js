import React from 'react';
import { connect } from 'react-redux';
import { getTotalWeight } from '../selectors/recipeEdit';
import { removeFermentable } from '../actions/recipeStaged';

import EditIcons from './EditIcons';

const FermentableList = props => (
  <tbody>
    {props.recipeFermentables.map((fermentable) => {
      const { dispatch } = props;

      // provide the % of total weight
      const weight = Math.round((fermentable.weight / props.totalWeight) * 100);

      return (
        <tr key={fermentable.key} className="recipe-table__row">
          <td className="recipe-table__cell text-left">{props.fermentables[fermentable.id].name}</td>
          <td className="recipe-table__cell text-right">{fermentable.weight} lb</td>
          <td className="recipe-table__cell text-right">{props.fermentables[fermentable.id].srm} SRM</td>
          <td className="recipe-table__cell text-right">{weight}%</td>
          <EditIcons removeItem={() => dispatch(removeFermentable(fermentable.key))} />
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
