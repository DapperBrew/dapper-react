import React from 'react';

class Input extends React.Component {

  onUpdate = (e) => {
    this.props.onUpdate(e.target.value);
  }

  renderUserMessage() {
    if (this.props.measurement) {
      return (
        <div className="form__measure">{this.props.measurement}</div>
      );
    }
    return false;
  }

  render() {
    const props = this.props;
    return (
      <div className={`form-group form-group--${props.side}`}>
        <label htmlFor={props.id} className="form__label">{props.label}</label>
        <input
          id={props.id}
          type="text"
          onChange={this.onUpdate}
          placeholder={props.placeholder}
          className={`form__input ${props.measurement ? 'form__input--measure' : ''}`}
        />
        {this.renderUserMessage()}
      </div>
    );
  }
}

Input.propTypes = {
  measurement: React.PropTypes.string,
  onUpdate: React.PropTypes.func,
};

export default Input;
