import React from 'react';

// Components
import Input from './Input';

const FermentableModalContent = props => (
  <div>
    <span className="ingredient-section-title">Amount</span>
    <Input
      side="left"
      id="weight"
      measurement="lb"
      placeholder="ex: 2"
      onUpdate={props.onUpdate}
    />
    <Input
      side="right"
      id="weightoz"
      measurement="oz"
      placeholder="ex: 8"
      onUpdate={props.onUpdate}
    />
  </div>
);

FermentableModalContent.propTypes = {
  onUpdate: React.PropTypes.func.isRequired,
};

export default FermentableModalContent;
