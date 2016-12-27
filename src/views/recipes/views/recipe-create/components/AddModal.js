import React from 'react';
import Modal from 'react-modal';


const AddModal = props => (
  <div>
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Fermentation Modal"
      className="add-modal-wrapper"
      overlayClassName="add-modal-overlay"
    >
      <div className="container">
        <div className="add-modal">
          {props.children}
        </div>
      </div>
    </Modal>
  </div>
);

AddModal.propTypes = {
  children: React.PropTypes.element,
  closeModal: React.PropTypes.func.isRequired,
  modalIsOpen: React.PropTypes.bool.isRequired,
};

export default AddModal;
