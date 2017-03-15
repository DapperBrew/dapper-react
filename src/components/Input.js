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
    if (this.props.measurement) {
      return (
        <div className={classNames('form__measure', { isError: this.props.isError })}>{this.props.measurement}</div>
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
        />
        {this.renderMeasurement()}
      </div>
    );
  }
}

Input.propTypes = {
  measurement: React.PropTypes.string,
  onChange: React.PropTypes.func,
  isError: React.PropTypes.bool,
  tooltip: React.PropTypes.string,
  id: React.PropTypes.string,
};

export default Input;
