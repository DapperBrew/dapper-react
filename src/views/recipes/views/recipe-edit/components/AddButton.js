import React from 'react';

const AddButton = props => (
  <button
    className="button button--primary mt1"
    onClick={props.openModal}
  >
    {props.text}
  </button>
);

AddButton.propTypes = {
  openModal: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default AddButton;
