import React from 'react';
import { connect } from 'react-redux';
import { ibu } from 'dapper-calc/build';

// actions
import { removeHop } from '../actions/recipeStaged';
import { showEditModal } from '../actions/modals';

// components
import EditIcons from './EditIcons';

// selectors
import { getPreBoilGravity } from '../selectors/recipeEdit';

const HopList = props => (
  <tbody>
    {props.recipeHops.map((hop) => {
      const { dispatch, boilGravity, recipeStaged } = props;
      let adjust;
      if (hop.type === 'pellet') {
        adjust = 10;
      }
      // calculate IBU
      console.log('hop', hop)
      console.log('weight', hop.weight);
      console.log('alpha', hop.alpha);
      console.log('time', hop.time);
      console.log('boilGravity', boilGravity);
      console.log('postBoilVolume', recipeStaged.postBoilVolume);
      const aa = ibu(
        Number(hop.weight),
        Number(hop.alpha),
        Number(hop.time),
        Number(boilGravity),
        Number(recipeStaged.postBoilVolume),
        adjust,
      );
      return (
        <tr key={hop.key} className="recipe-table__row">
          <td className="recipe-table__cell text-left">{hop.name}</td>
          <td className="recipe-table__cell text-right">{hop.weight} oz</td>
          <td className="recipe-table__cell text-right">{hop.time} {hop.stage === 'dry hop' ? 'days' : 'min'}</td>
          <td className="recipe-table__cell text-right capitolize">{hop.stage}</td>
          <td className="recipe-table__cell text-right">{aa} IBU</td>
          <EditIcons
            removeItem={() => dispatch(removeHop(hop.key))}
            editItem={() => dispatch(showEditModal('editHop', hop.key))}
          />
        </tr>
      );
    })}
  </tbody>
);

const mapStateToProps = state => ({
  recipeHops: state.recipeEdit.recipeStaged.hops,
  recipeStaged: state.recipeEdit.recipeStaged,
  boilGravity: getPreBoilGravity(state),
});

HopList.propTypes = {
  recipeHops: React.PropTypes.array.isRequired, // eslint-disable-line
};

export default connect(mapStateToProps)(HopList);
