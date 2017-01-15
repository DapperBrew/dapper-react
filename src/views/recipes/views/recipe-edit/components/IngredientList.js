/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';


const IngredientHeader = props => (
  <div>
    {props.headers.map(header => (
      <div
        key={header}
        className="ingredient-list__header-cell"
      >
        {header}
      </div>
    ))}
  </div>
);

const IngredientListRows = props => (
  <tbody className="ingredient-list__tbody">
    {props.filteredItems.map(item => (
      <tr
        key={item._id}
        onClick={() => props.onSelect(item._id)}
        className={classNames('ingredient-list__row', { 'is-active': props.selectedItem === item._id })}
      >
        {props.cells.map(cell => (
          <td key={cell} className="ingredient-list__cell text-left">{item[cell]}</td>
        ))}
      </tr>
    ))}
  </tbody>
);


class IngredientList extends React.Component {

  componentDidMount() {
    this.setHeaderSize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', debounce(this.onResize, 75), false);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', debounce(this.onResize, 75));
    }
  }

  // trigger on window resize
  onResize = () => {
    this.setHeaderSize();
  }

  // workaround fdor sticky table header. Sets table header widths to equal
  // cells in the table body
  setHeaderSize = () => {
    const headers = document.getElementsByClassName('ingredient-list__header-cell');
    const cells = document.getElementsByClassName('ingredient-list__cell');

    for (let i = 0; i < headers.length; i += 1) {
      headers[i].style.width = `${cells[i].offsetWidth}px`;
    }
  }

  render() {
    return (
      <div>
        <div className="ingredient-list__header clearfix">
          <IngredientHeader {...this.props} />
        </div>
        <div className="ingredient-list-wrap">
          <table className="ingredient-list" id="tester">
            <IngredientListRows {...this.props} />
          </table>
        </div>
      </div>
    );
  }
}

IngredientHeader.propTypes = {
  headers: React.PropTypes.arrayOf(React.PropTypes.string),
};

IngredientListRows.propTypes = {
  filteredItems: React.PropTypes.arrayOf(React.PropTypes.object),
  cells: React.PropTypes.arrayOf(React.PropTypes.string),
};


export default IngredientList;
