// This component is an input with a selct dropdown immediately to the right.
// This allows a dropdown to be associated with the input

import React from 'react';
import Select from 'react-select';
import classNames from 'classnames';

const InputSelect = props => (
  <div>
    <div className={`form-group form-group--half form-group--${props.side}`}>
      <div className="form__label-wrap">
        <label htmlFor={props.id} className="form__label">{props.label}</label>
      </div>
      <input
        id={props.id}
        type="text"
        onChange={e => props.onInputChange(e.target.value)}
        placeholder={props.placeholder}
        className={
          classNames(
            'form__input',
            'form__input--select',
            { isError: props.isError })
        }
        value={props.inputValue}
      />
      <Select
        name="select"
        options={props.options}
        className="form__select--input"
        onChange={props.onSelectChange}
        value={props.selectValue}
        clearable={false}
        selectValue={'lb'}
        simpleValue={true} //eslint-disable-line
        searchable={false}
      />
    </div>
  </div>
);

InputSelect.propTypes = {
  side: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  onInputChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  inputValue: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired, // eslint-disable-line
  onSelectChange: React.PropTypes.func.isRequired,
  selectValue: React.PropTypes.string.isRequired,
  isError: React.PropTypes.bool,
};

export default InputSelect;
