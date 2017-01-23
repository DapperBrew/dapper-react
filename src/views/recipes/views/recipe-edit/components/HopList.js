import React from 'react';
import { connect } from 'react-redux';
import { removeHop } from '../actions/recipeStaged';

import EditIcons from './EditIcons';

const HopList = props => (
  <tbody>
    {props.recipeHops.map((hop) => {
      const { dispatch, hops } = props;
      console.log(hop.weight);

      return (
        <tr key={hop.key} className="recipe-table__row">
          <td className="recipe-table__cell text-left">{hops[hop.id].name}</td>
          <td className="recipe-table__cell text-right">{hop.weight} oz</td>
          <td className="recipe-table__cell text-right">{hop.time} {hop.stage === 'dry hop' ? 'days' : 'min'}</td>
          <td className="recipe-table__cell text-right capitolize">{hop.stage}</td>
          <td className="recipe-table__cell text-right">40 IBU</td>
          <EditIcons removeItem={() => dispatch(removeHop(hop.key))} />
        </tr>
      );
    })}
  </tbody>
);

const mapStateToProps = state => ({
  hops: state.data.hops,
  recipeHops: state.recipeEdit.recipeStaged.hops,
});

HopList.propTypes = {
  recipeHops: React.PropTypes.array.isRequired, // eslint-disable-line
};

export default connect(mapStateToProps)(HopList);
