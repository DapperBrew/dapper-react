/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import classNames from 'classnames';

const IngredientList = props => (
  <div>
    <div className="ingredient-list__header clearfix">
      {props.headers.map(header => (
        <div key={header} className="ingredient-list__header-cell">{header}</div>
      ))}
    </div>
    <div className="ingredient-list-wrap">
      <table className="ingredient-list" id="tester">
        <tbody className="ingredient-list__tbody">
          {props.filteredItems.map(item => (
            <tr
              key={item.id}
              onClick={() => props.onSelect(item.id)} className={classNames('ingredient-list__row', { 'is-active': props.selectedItem === item.id })}
            >
              {props.cells.map(cell => (
                <td key={cell} className="ingredient-list__cell text-left">{item[cell]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

IngredientList.propTypes = {
  // headers: React.PropTypes.object,
  filteredItems: React.PropTypes.arrayOf(React.PropTypes.object),
  cells: React.PropTypes.arrayOf(React.PropTypes.string),
  headers: React.PropTypes.arrayOf(React.PropTypes.string),
};


export default IngredientList;
