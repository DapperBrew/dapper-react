import React from 'react';
import Select from 'react-select';

class CardSelect extends React.Component {
  constructor() {
    super();

    this.updateValue = this.updateValue.bind(this);

    this.state = {
      order: {},
    };
  }

  // updates component state on select
  updateValue(newValue) {
    this.setState({ selectValue: newValue });
  }

  render() {
    const props = this.props;
    return (
      <div className={`form-group form-group--${props.side}`}>
        <label htmlFor={props.name} className="form__label">{props.label}</label>
        <Select
          name={props.name}
          value={this.state.selectValue}
          onChange={this.updateValue}
          options={props.options}
          className="input__select"
        />
      </div>
    );
  }
}

export default CardSelect;
