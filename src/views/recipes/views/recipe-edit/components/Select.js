import React from 'react';
import Select from 'react-select';

class CardSelect extends React.Component {

  render() {
    const props = this.props;
    return (
      <div className={`form-group form-group--${props.side}`}>
        <label htmlFor={props.name} className="form__label">{props.label}</label>
        <Select
          name={props.name}
          label
          onChange={props.onChange}
          options={props.options}
          className="input__select"
          value={props.value}
        />
      </div>
    );
  }
}

export default CardSelect;
