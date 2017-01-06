import React from 'react';

import Input from './Input';
import ModalSubmit from './ModalSubmit';
import IngredientSearch from './IngredientSearch';
import items from '../../../../../data/fermentable';

// various keys used to populate reusable components

// Column headers
const COLUMNS_HEADERS = ['Name', 'Type', 'Color'];

// Cell item types. # should be same as header
const CELL_ITEMS = ['name', 'type', 'srm'];

// Keys that can be searched when typing in the search field.
const KEYS_TO_FILTERS = ['name', 'type'];


class HopModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      selectedItem: '',
    };
  }

  onSelect = (itemId) => {
    this.setState({
      selectedItem: itemId,
    });
  }

  setSearchTerm = (term) => {
    this.setState({
      searchTerm: term,
    });
  }

  render() {
    return (
      <div>
        <h3>Add Hops</h3>
        <IngredientSearch
          onChange={this.searchUpdated}
          headers={COLUMNS_HEADERS}
          cells={CELL_ITEMS}
          keys={KEYS_TO_FILTERS}
          onSelect={this.onSelect}
          selectedItem={this.state.selectedItem}
          setSearchTerm={this.setSearchTerm}
          items={items}
          searchTerm={this.state.searchTerm}
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
        <ModalSubmit closeModal={this.props.closeModal} />
      </div>
    );
  }
}

HopModal.propTypes = {
  closeModal: React.PropTypes.func,
};

export default HopModal;
