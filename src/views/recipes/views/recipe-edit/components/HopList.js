import React from 'react';
import { connect } from 'react-redux';
import { ibu } from 'dapper-calc/build';
import { removeHop } from '../actions/recipeStaged';

// components
import EditIcons from './EditIcons';

// selectors
import { estimateOriginalGravity } from '../selectors/recipeEdit';

const HopList = props => (
  <tbody>
    {props.recipeHops.map((hop) => {
      const { dispatch, hops, originalGravity, recipeStaged } = props;
      // calculate IBU
      const aa = ibu(
        Number(hop.weight),
        Number(hop.aa),
        Number(hop.time),
        Number(originalGravity),
        Number(recipeStaged.batchSize),
      );
      return (
        <tr key={hop.key} className="recipe-table__row">
          <td className="recipe-table__cell text-left">{hops[hop.id].name}</td>
          <td className="recipe-table__cell text-right">{hop.weight} oz</td>
          <td className="recipe-table__cell text-right">{hop.time} {hop.stage === 'dry hop' ? 'days' : 'min'}</td>
          <td className="recipe-table__cell text-right capitolize">{hop.stage}</td>
          <td className="recipe-table__cell text-right">{aa} IBU</td>
          <EditIcons removeItem={() => dispatch(removeHop(hop.key))} />
        </tr>
      );
    })}
  </tbody>
);

const mapStateToProps = state => ({
  hops: state.data.hops,
  recipeHops: state.recipeEdit.recipeStaged.hops,
  recipeStaged: state.recipeEdit.recipeStaged,
  originalGravity: estimateOriginalGravity(state),
});

HopList.propTypes = {
  recipeHops: React.PropTypes.array.isRequired, // eslint-disable-line
};

export default connect(mapStateToProps)(HopList);
