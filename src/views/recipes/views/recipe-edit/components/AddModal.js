import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import Modal from 'react-modal';

// actions
import { hideModal } from '../actions/modals';


class AddModal extends React.Component {
  onRequestCancel = () => {
    document.body.classList.remove('ReactModal__Body--open');
  }

  afterOpenModal = () => {
    document.body.classList.add('ReactModal__Body--open');
  }

  render() {
    const { modal, dispatch } = this.props;
    const isOpen = this.props.modal.modalOpen === true
                && modal.modalName === this.props.name;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => dispatch(hideModal())}
        contentLabel="Add Modal"
        className="add-modal-wrapper"
        overlayClassName="add-modal-overlay"
        onAfterOpen={this.afterOpenModal}
        onRequestCancel={this.onRequestCancel}
      >
        <div className="container">
          <div className="add-modal">
            <h3>{this.props.header}</h3>
            {this.props.children}
            {modal.modalError ? <span className="add-modal__error">{modal.modalError}</span> : null }
          </div>
        </div>
      </Modal>
    );
  }

}

AddModal.propTypes = {
  name: PropTypes.string.isRequired,
  modal: PropTypes.object.isRequired, // eslint-disable-line
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired, // eslint-disable-line
  header: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});


export default connect(mapStateToProps)(AddModal);
