import React from 'react';
import { connect } from 'react-redux';

// selectors
import { getTotalWeight } from '../selectors/recipeEdit';

// actions
import { removeFermentable } from '../actions/recipeStaged';
import { showEditModal } from '../actions/modals';


// images and icons
import EditIcons from './EditIcons';


const FermentableList = props => (
  <tbody>
    {props.recipeFermentables.map((fermentable) => {
      const { dispatch } = props;

      // provide the % of total weight
      const weight = Math.round((fermentable.weight / props.totalWeight) * 100);

      return (
        <tr key={fermentable.key} className="recipe-table__row">
          <td className="recipe-table__cell text-left">
            {fermentable.maltster ? `[${fermentable.maltster}] ` : ''}
            {fermentable.name}
          </td>
          <td className="recipe-table__cell text-right">{fermentable.weight} {fermentable.unit}</td>
          <td className="recipe-table__cell text-right">{fermentable.srm} SRM</td>
          <td className="recipe-table__cell text-right">{weight}%</td>
          <EditIcons
            removeItem={() => dispatch(removeFermentable(fermentable.key))}
            editItem={() => dispatch(showEditModal('editFermentable', fermentable.key))}
          />
        </tr>
      );
    })}
  </tbody>
);

const mapStateToProps = state => ({
  recipeFermentables: state.recipeEdit.recipeStaged.fermentables,
  totalWeight: getTotalWeight(state),
});

FermentableList.propTypes = {
  recipeFermentables: React.PropTypes.array.isRequired, // eslint-disable-line
  totalWeight: React.PropTypes.number,
};

export default connect(mapStateToProps)(FermentableList);
