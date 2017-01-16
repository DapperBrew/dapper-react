import React from 'react';
import { connect } from 'react-redux';

const FermentableRowAll = props => (
  <tbody>
    {props.recipeFermentables.map(fermentable => {

      // Calculate total weight of all fermentables
      const total = Object.keys(props.recipeFermentables)
        .reduce((previous, key) => (
          previous + Number(props.recipeFermentables[key].weight)
        ), 0);

      // provide the % of total weight
      const weight = Math.round((fermentable.weight / total) * 100);

      return (
        <tr key={fermentable.id} className="recipe-table__row">
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
});

export default connect(mapStateToProps)(FermentableRowAll);
