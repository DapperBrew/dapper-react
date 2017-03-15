import React from 'react';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';


const EquipmentInput = () => (
  <div className="form-group clearfix">
    <label htmlFor="1" className="equipment-input__label">Label</label>
    <a data-tip data-for="meh">
      {/* <svg className="question-icon">
        <use xlinkHref={`${icon}#icon-alert-circle-?`} />
      </svg> */}
    </a>
    <input
      id="1"
      type="text"
      placeholder="placeholder..."
      className="form__input form-input--measure"
    />
    <div className={classNames('form__measure', { isError: false })}>oz</div>
    <ReactTooltip id="meh" type="dark">
      <span>Tooltip</span>
    </ReactTooltip>
  </div>
);

// EquipmentInput.propTypes = {
//   : React.PropTypes.
// };

export default EquipmentInput;
