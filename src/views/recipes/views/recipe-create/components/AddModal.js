import React from 'react';
import { connect } from 'react-redux';

// Components
import Modal from 'react-modal';
import SearchInput, { createFilter } from 'react-search-input';
import IngredientList from './IngredientList';

// actions
import { hideModal, loadModal, updateSearch, selectItem, modalInfo } from '../actions';

// dummy data
import items from '../../../../../data/fermentable';


class AddModal extends React.Component {
  componentWillUpdate() {
    const { dispatch } = this.props;

    // Load appropriate data
    const currentModal = modalInfo[this.props.name];
    if (!this.props.modal.modalName) {
      dispatch(loadModal(
        currentModal.SEARCH_TABLE_HEADER,
        currentModal.SEARCH_TABLE_CELLS,
        currentModal.SEARCH_KEYS,
      ));
    }
  }

  render() {
    const { modal, dispatch } = this.props;
    const isOpen = this.props.modal.modalOpen === true
                && modal.modalName === this.props.name;
    const filteredItems = items.filter(createFilter(modal.searchTerm, modal.searchKeys));
    return (
      <div>
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
              />
              <IngredientList
                headers={modal.searchTableHeaders}
                cells={modal.searchTableCells}
                filteredItems={filteredItems}
                selectedItem={modal.selectedItem}
                onSelect={item => dispatch(selectItem(item))}
              />
              {this.props.children}
            </div>
          </div>

        </Modal>
      </div>
    );
  }

}

AddModal.propTypes = {
  name: React.PropTypes.string.isRequired,
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
  children: React.PropTypes.array.isRequired, // eslint-disable-line
  header: React.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeCreate.modals,
});


export default connect(mapStateToProps)(AddModal);
