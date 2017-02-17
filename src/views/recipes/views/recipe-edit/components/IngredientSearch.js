import React from 'react';
import { connect } from 'react-redux';


// import Components
import SearchInput, { createFilter } from 'react-search-input';
import IngredientList from './IngredientList';

// actions
import { updateSearch, selectItem } from '../actions/modals';

const IngredientSearch = (props) => {
  const { modal, dispatch, items } = props;
  const filteredItems = items.filter(createFilter(modal.searchTerm, props.searchKeys));
  return (
    <div>
      <SearchInput
        className="ingredient-search"
        throttle={100}
        placeholder="Filter..."
        onChange={(term => dispatch(updateSearch(term)))}
        autoFocus
      />
      <IngredientList
        headers={props.headers}
        cells={props.cells}
        filteredItems={filteredItems}
        selectedItem={modal.selectedItem}
        onSelect={item => dispatch(selectItem(item))}
        isError={modal.modalErrorField === 'select'}
      />
    </div>
  );
};

IngredientSearch.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func,
  items: React.PropTypes.array.isRequired, // eslint-disable-line
  cells: React.PropTypes.array.isRequired, //eslint-disable-line
  headers: React.PropTypes.array.isRequired, // eslint-disable-line
  searchKeys: React.PropTypes.array.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});

export default connect(mapStateToProps)(IngredientSearch);
