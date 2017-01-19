import React from 'react';
import classNames from 'classnames';

class Input extends React.Component {

  // debounce workaround
  // componentWillMount() {
  //   this.method = debounce(e => (
  //     this.props.onChange(e.target.value)
  //   ), 300);
  // }
  //
  // debounceEvent = (event) => {
  //   event.persist();
  //   this.method(event);
  // };

  onChange = (e) => {
    this.props.onChange(e.target.value);
  }

  renderUserMessage() {
    if (this.props.measurement) {
      return (
        <div className={classNames('form__measure', { isError: this.props.isError })}>{this.props.measurement}</div>
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
          onChange={this.onChange}
          placeholder={props.placeholder}
          className={
            classNames(
              'form__input',
              { 'form__input--measure': props.measurement },
              { isError: props.isError })
          }
          value={props.value}
        />
        {this.renderUserMessage()}
      </div>
    );
  }
}

Input.propTypes = {
  measurement: React.PropTypes.string,
  onChange: React.PropTypes.func,
  isError: React.PropTypes.bool,
};

export default Input;
