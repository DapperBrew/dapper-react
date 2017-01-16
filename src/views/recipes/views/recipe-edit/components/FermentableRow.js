import React from 'react';
import { connect } from 'react-redux';

const FermentableRowAll = props => (
  <tbody>
    {props.fermentables.map(fermentable => (
      <tr key={fermentable.id} className="recipe-table__row">
        <td className="recipe-table__cell text-left">Fermentable Name</td>
        <td className="recipe-table__cell text-right">{fermentable.weight} lb</td>
        <td className="recipe-table__cell text-right">{fermentable.srm} SRM</td>
        <td className="recipe-table__cell text-right">12%</td>
        <td className="recipe-table__cell recipe-table__cell--shrink text-right">O  X</td>
      </tr>
    ))}
  </tbody>
);

// export default FermentableRow;

const mapStateToProps = state => ({
  fermentables: state.recipeEdit.recipeStaged.fermentables,
});

export default connect(mapStateToProps)(FermentableRowAll);
