import PropTypes from 'prop-types';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import Toggle from 'react-toggle';

// Images
import icon from '../../../img/icons.svg';

const MashAdjustToggle = props => (
  <div className="mb1">
    <ReactTooltip
      id={`tooltip-${props.id}`}
      place="top"
      type="dark"
      effect="float"
      class="dapper-tooltip"
    >
      <span>{props.tooltip}</span>
    </ReactTooltip>
    <Toggle
      id={props.id}
      onChange={props.onChange}
      checked={props.checked}
    />
    <label htmlFor={props.id}>Adjust Mash Temps for Equipment?</label>
    <a data-tip data-for={`tooltip-${props.id}`}>
      <svg className="question-icon">
        <use xlinkHref={`${icon}#icon-alert-circle-?`} />
      </svg>
    </a>
  </div>
);

MashAdjustToggle.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  id: PropTypes.string,
  tooltip: PropTypes.string,
};

export default MashAdjustToggle;
