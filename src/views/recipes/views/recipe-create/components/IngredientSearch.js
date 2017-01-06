import React from 'react';
import debounce from 'lodash/debounce';

import SearchInput, { createFilter } from 'react-search-input';
import IngredientList from './IngredientList';


class IngredientSearch extends React.Component {

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
    const items = this.props.items;
    const filteredItems = items.filter(createFilter(this.props.searchTerm, this.props.keys));
    return (
      <div>
        <SearchInput
          className="ingredient-search"
          throttle={100}
          placeholder="Filter..."
          onChange={this.props.searchUpdated}
        />
        <IngredientList
          headers={this.props.headers}
          cells={this.props.cells}
          filteredItems={filteredItems}
          onSelect={this.props.onSelect}
          selectedItem={this.props.selectedItem}
        />
      </div>
    );
  }

}

IngredientSearch.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  searchUpdated: React.PropTypes.func.isRequired,
  headers: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  cells: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  keys: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onSelect: React.PropTypes.func.isRequired,
  selectedItem: React.PropTypes.string.isRequired,
  searchTerm: React.PropTypes.string.isRequired,
};

export default IngredientSearch;
