import React from 'react';
import { connect } from 'react-redux';
import { ibu } from 'dapper-calc/build';
import { removeHop } from '../actions/recipeStaged';

// components
import EditIcons from './EditIcons';

// selectors
import { getPreBoilGravity } from '../selectors/recipeEdit';

const HopList = props => (
  <tbody>
    {props.recipeHops.map((hop) => {
      const { dispatch, hops, boilGravity, recipeStaged } = props;
      let adjust;
      if (hop.type === 'pellet') {
        adjust = 10;
      }
      // calculate IBU
      const aa = ibu(
        Number(hop.weight),
        Number(hop.aa),
        Number(hop.time),
        Number(boilGravity),
        Number(recipeStaged.postBoilVolume),
        adjust,
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
  boilGravity: getPreBoilGravity(state),
});

HopList.propTypes = {
  recipeHops: React.PropTypes.array.isRequired, // eslint-disable-line
};

export default connect(mapStateToProps)(HopList);
