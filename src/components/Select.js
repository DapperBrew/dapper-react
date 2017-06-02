import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import classNames from 'classnames';

const CardSelect = props => (
  <div
    className={classNames({
      'form-group': true,
      'form-group--full': props.inputWidth === 'full',
      'form-group--half': props.inputWidth === 'half',
      'form-group--quarter': props.inputWidth === 'quarter',
      'form-group--left': props.side === 'left',
      'form-group--right': props.side === 'right',
    })}
  >
    <label htmlFor={props.name} className="form__label">{props.label}</label>
    <Select
      name={props.name}
      label
      onChange={props.onChange}
      options={props.options}
      className="input__select"
      value={props.value}
      simpleValue={true}
      disabled={props.disabled}
      clearable={props.clearable}
    />
  </div>
);

CardSelect.propTypes = {
  inputWidth: PropTypes.string,
  side: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  value: PropTypes.string,
  options: PropTypes.object, // eslint-disable-line
  onChange: PropTypes.func,
};


export default CardSelect;
