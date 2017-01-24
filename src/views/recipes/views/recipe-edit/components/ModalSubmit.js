import React from 'react';

const ModalSubmit = props => (
  <div className="break">
    <button onClick={props.submitModal} className="button">Submit</button>
    <button onClick={props.resetModal} className="button ml1">Submit & Add Another</button>
    <button onClick={props.closeModal} className="button ml1">Cancel</button>
  </div>
);

ModalSubmit.propTypes = {
  closeModal: React.PropTypes.func.isRequired,
  submitModal: React.PropTypes.func.isRequired,
  resetModal: React.PropTypes.func.isRequired,
};

export default ModalSubmit;
