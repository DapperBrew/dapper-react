import React from 'react';

const AddButton = props => (
  <button
    className="button button--primary mt1"
    onClick={props.openModal}
  >
    Open Modalzz
  </button>
);

AddButton.propTypes = {
  openModal: React.PropTypes.func.isRequired,
};

export default AddButton;
