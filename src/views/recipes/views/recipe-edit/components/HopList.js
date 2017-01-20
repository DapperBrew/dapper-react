import React from 'react';
import { connect } from 'react-redux';
import { removeHop } from '../actions/recipeStaged';

import EditIcons from './EditIcons';

const HopList = props => (
  <tbody>
    {props.recipeHops.map((hop) => {
      const { dispatch } = props;

      return (
        <tr key={hop.key} className="recipe-table__row">
          <td className="recipe-table__cell text-left">Centennial</td>
          <td className="recipe-table__cell text-right">2 oz</td>
          <td className="recipe-table__cell text-right">60 min</td>
          <td className="recipe-table__cell text-right">Boil</td>
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
