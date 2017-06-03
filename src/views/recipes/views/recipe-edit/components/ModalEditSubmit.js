import PropTypes from 'prop-types';
import React from 'react';

const ModalSubmit = props => (
  <div className="break">
    <button onClick={props.submitModal} className="button">Update</button>
    <button onClick={props.closeModal} className="button ml1">Cancel</button>
  </div>
);

ModalSubmit.propTypes = {
  closeModal: PropTypes.func.isRequired,
  submitModal: PropTypes.func.isRequired,
};

export default ModalSubmit;
