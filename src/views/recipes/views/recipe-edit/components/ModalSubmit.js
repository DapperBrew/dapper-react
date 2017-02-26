import React from 'react';

const ModalSubmit = props => (
  <div className="break">
    {/* <button onClick={props.submitModal} className="button button--primary">Submit</button> */}
    <button onClick={props.resetModal} className="button button--primary">Add & Continue</button>
    <button onClick={props.closeModal} className="button button--secondary ml1">Done</button>
  </div>
);

ModalSubmit.propTypes = {
  closeModal: React.PropTypes.func.isRequired,
  submitModal: React.PropTypes.func.isRequired,
  resetModal: React.PropTypes.func.isRequired,
};

export default ModalSubmit;
