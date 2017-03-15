import React from 'react';
import Select from 'react-select';
import classNames from 'classnames';

class CardSelect extends React.Component {

  render() {
    const props = this.props;
    return (
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
          simpleValue={true} //eslint-disable-line
        />
      </div>
    );
  }
}

export default CardSelect;
