import PropTypes from 'prop-types';
import React from 'react';

const AddButton = props => (
  <div>
    <button className="button button--primary" onClick={props.onPrimaryClick}>
      Add New
    </button>
    <button className="button button--secondary ml1" onClick={props.onSecondaryClick}>
      Add Custom
    </button>
  </div>
);

AddButton.propTypes = {
  onPrimaryClick: PropTypes.func.isRequired,
  onSecondaryClick: PropTypes.func.isRequired,
};

export default AddButton;
