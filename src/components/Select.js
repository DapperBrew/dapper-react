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
  inputWidth: React.PropTypes.string,
  side: React.PropTypes.string,
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  clearable: React.PropTypes.bool,
  value: React.PropTypes.string,
  options: React.PropTypes.object, // eslint-disable-line
  onChange: React.PropTypes.func,
};


export default CardSelect;
