import React from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import debounce from 'lodash/debounce';

import Input from './Input';
import IngredientList from './IngredientList';
import fermentables from '../../../../../data/fermentable';

// various keys used to populate reusable components

// Column headers
const COLUMNS_HEADERS = ['Name', 'Type', 'Color'];

// Cell item types. # should be same as header
const CELL_ITEMS = ['name', 'type', 'srm'];

// Keys that can be searched when typing in the search field.
const KEYS_TO_FILTERS = ['name', 'type'];


class FermentableModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      selectedItem: '',
    };
  }

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

  onSelect = (itemId) => {
    this.setState({
      selectedItem: itemId,
    });
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

  // triggers after updating search filter
  searchUpdated = (term) => {
    this.setState({
      searchTerm: term,
    });
    this.setHeaderSize();
  }

  render() {
    const filteredItems = fermentables.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    return (
      <div>
        <h3>Add a Fermentable</h3>
        <SearchInput
          className="ingredient-search"
          throttle={100}
          placeholder="Filter..."
          onChange={this.searchUpdated}
        />
        <IngredientList
          headers={COLUMNS_HEADERS}
          cells={CELL_ITEMS}
          filteredItems={filteredItems}
          onSelect={this.onSelect}
          selectedItem={this.state.selectedItem}
        />
        <span className="ingredient-section-title">Amount</span>
        <Input
          side="left"
          id="weight"
          measurement="lb"
          placeholder="ex: 2"
        />
        <Input
          side="right"
          id="weightoz"
          measurement="oz"
          placeholder="ex: 8"
        />
        <div className="break">
          <button className="button">Submit</button>
          <button className="button ml1">Cancel</button>
        </div>
      </div>
    );
  }
}

export default FermentableModal;
