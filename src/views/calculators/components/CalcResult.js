import React from 'react';
import PropTypes from 'prop-types';

const CalcResult = props => (
  <div className={`calc-output ${props.isHalf ? 'calc-output--half' : ''}`}>
    <h5 className="calc-output__title">{props.title}</h5>
    <div className="calc-output__result">
      {props.children}
    </div>
  </div>
);

CalcResult.propTypes = {
  isHalf: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

CalcResult.defaultProps = {
  isHalf: false,
};

export default CalcResult;
