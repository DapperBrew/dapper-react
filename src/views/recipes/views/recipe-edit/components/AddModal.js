import React from 'react';
import { connect } from 'react-redux';

// Components
import Modal from 'react-modal';
import SearchInput, { createFilter } from 'react-search-input';
import IngredientList from './IngredientList';

// actions
import { hideModal, updateSearch, selectItem } from '../actions/modals';


class AddModal extends React.Component {

  render() {
    const { modal, dispatch } = this.props;
    const isOpen = this.props.modal.modalOpen === true
                && modal.modalName === this.props.name;
    const items = this.props.items;
    const filteredItems = items.filter(createFilter(modal.searchTerm, this.props.searchKeys));

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => dispatch(hideModal())}
        contentLabel="Fermentation Modal"
        className="add-modal-wrapper"
        overlayClassName="add-modal-overlay"
      >
        <div className="container">
          <div className="add-modal">
            <h3>{this.props.header}</h3>
            <SearchInput
              className="ingredient-search"
              throttle={100}
              placeholder="Filter..."
              onChange={(term => dispatch(updateSearch(term)))}
              autoFocus
            />
            <IngredientList
              headers={this.props.headers}
              cells={this.props.cells}
              filteredItems={filteredItems}
              selectedItem={modal.selectedItem}
              onSelect={item => dispatch(selectItem(item))}
              isError={modal.modalErrorField === 'select'}
            />
            {this.props.children}
            {modal.modalError ? <span className="add-modal__error">{modal.modalError}</span> : null }
          </div>
        </div>
      </Modal>
    );
  }

}

AddModal.propTypes = {
  name: React.PropTypes.string.isRequired,
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
  children: React.PropTypes.array.isRequired, // eslint-disable-line
  header: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});


export default connect(mapStateToProps)(AddModal);
