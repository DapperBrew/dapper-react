import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import ReactTooltip from 'react-tooltip';

// images and icons
import icon from '../img/icons.svg';

class Input extends React.Component {

  onChange = (e) => {
    this.props.onChange(e.target.value);
  }

  renderMeasurement = () => {
    const classes = classNames(
      'form__measure',
      { isError: this.props.isError },
      { 'is-disabled': this.props.disabled },
    );
    if (this.props.measurement) {
      return (
        <div className={classes}>{this.props.measurement}</div>
      );
    }
    return false;
  }

  renderTooltip = () => {
    if (this.props.tooltip) {
      return (
        <a data-tip data-for={this.props.id}>
          <svg className="question-icon">
            <use xlinkHref={`${icon}#icon-alert-circle-?`} />
          </svg>
          <ReactTooltip id={this.props.id} place="top" type="dark" effect="float">
            <span>{this.props.tooltip}</span>
          </ReactTooltip>
        </a>
      );
    }
    return false;
  }


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
          'form-group--inside-left': props.inside === 'left',
          'form-group--inside-right': props.inside === 'right',
        })}
      >
        <div className="form__label-wrap">
          <label htmlFor={props.id} className="form__label">{props.label}</label>
          {this.renderTooltip()}
        </div>
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
          disabled={props.disabled}
        />
        {this.renderMeasurement()}
      </div>
    );
  }
}

Input.propTypes = {
  measurement: PropTypes.string,
  onChange: PropTypes.func,
  isError: PropTypes.bool,
  tooltip: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Input;
