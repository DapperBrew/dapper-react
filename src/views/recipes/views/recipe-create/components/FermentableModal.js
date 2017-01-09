import React from 'react';
import { connect } from 'react-redux';

// Components
import Modal from 'react-modal';
import SearchInput, { createFilter } from 'react-search-input';
import ModalSubmit from './ModalSubmit';
import IngredientList from './IngredientList';
import FermentableModalContent from './FermentableModalContent';

// actions
import { hideModal, loadModal, updateSearch, selectItem, modalInfo, addFermentable } from '../actions';

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
    const { selectedItem } = modal;
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
              <h3>Add Fermentable</h3>
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
              <FermentableModalContent
                onUpdate={this.inputWeight}
              />
              <ModalSubmit
                closeModal={() => dispatch(hideModal())}
                submitModal={() => dispatch(addFermentable(selectedItem, 4))}
              />
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
};

const mapStateToProps = state => ({
  modal: state.recipeCreate.modals,
});


export default connect(mapStateToProps)(AddModal);
