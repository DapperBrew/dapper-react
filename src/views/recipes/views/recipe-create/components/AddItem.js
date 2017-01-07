import React from 'react';
import Modal from 'react-modal';

// Components
import IngredientSearch from './IngredientSearch';
import ModalSubmit from './ModalSubmit';
import AddButton from './AddButton';


class TestAddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      selectedItem: '',
      modalIsOpen: false,
    };
  }

  onSelect = (itemId) => {
    this.setState({
      selectedItem: itemId,
    });
    this.props.selectItem(itemId);
  }

  setSearchTerm = (term) => {
    this.setState({
      searchTerm: term,
    });
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      searchTerm: '',
      selectedItem: '',
    });
  }

  // fired on submit in modal
  submitModal = () => {
    this.closeModal();
    this.props.onSubmit();
  }

  // fired on modal open
  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  render() {
    return (
      <div>
        <AddButton text={this.props.title} openModal={this.openModal} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Fermentation Modal"
          className="add-modal-wrapper"
          overlayClassName="add-modal-overlay"
        >
          <div className="container">
            <div className="add-modal">
              <h3>{this.props.title}</h3>
              <IngredientSearch
                headers={this.props.headers}
                cells={this.props.cells}
                keys={this.props.keys}
                onSelect={this.onSelect}
                selectedItem={this.state.selectedItem}
                setSearchTerm={this.setSearchTerm}
                items={this.props.items}
                searchTerm={this.state.searchTerm}
              />
              {this.props.children}
              <ModalSubmit
                closeModal={this.closeModal}
                submitModal={this.submitModal}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

TestAddModal.propTypes = {
  children: React.PropTypes.element,
  title: React.PropTypes.string.isRequired,
  headers: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  cells: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  keys: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  selectItem: React.PropTypes.func.isRequired,
};

export default TestAddModal;
