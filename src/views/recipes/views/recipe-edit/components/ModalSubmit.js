import PropTypes from 'prop-types';
import React from 'react';

const ModalSubmit = props => (
  <div className="break">
    <button onClick={props.resetModal} className="button button--primary">Add & Continue</button>
    <button onClick={props.closeModal} className="button button--secondary ml1">Done</button>
  </div>
);

ModalSubmit.propTypes = {
  closeModal: PropTypes.func.isRequired,
  resetModal: PropTypes.func.isRequired,
};

export default ModalSubmit;
