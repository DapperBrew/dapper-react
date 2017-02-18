import React from 'react';
import { connect } from 'react-redux';

// actions
import { removeMisc } from '../actions/recipeStaged';
import { showEditModal } from '../actions/modals';

// components
import EditIcons from './EditIcons';

const MiscList = props => (
  <tbody>
    {props.recipeMiscs.map((misc) => {
      const { dispatch } = props;
      return (
        <tr key={misc.key} className="recipe-table__row">
          <td className="recipe-table__cell text-left">{misc.name}</td>
          <td className="recipe-table__cell text-right">{misc.amount} {misc.amountUnit}</td>
          <td className="recipe-table__cell text-right">{misc.time} {misc.timeUnit}</td>
          <td className="recipe-table__cell text-right capitolize">{misc.stage}</td>
          <EditIcons
            removeItem={() => dispatch(removeMisc(misc.key))}
            editItem={() => dispatch(showEditModal('editMisc', misc.key))}
          />
        </tr>
      );
    })}
  </tbody>
);

const mapStateToProps = state => ({
  recipeMiscs: state.recipeEdit.recipeStaged.miscs,
  recipeStaged: state.recipeEdit.recipeStaged,
});

MiscList.propTypes = {
  recipeMiscs: React.PropTypes.array.isRequired, // eslint-disable-line
};

export default connect(mapStateToProps)(MiscList);
