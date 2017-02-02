import React from 'react';
import classNames from 'classnames';
import Select from 'react-select';

class MiscModalInput extends React.Component {

  render() {
    const props = this.props;
    return (
      <div className="misc-modal-input">
        <div className="misc-form-group">
          <label htmlFor="misc-amount" className="form__label">Amount</label>
          <input
            id="misc-amount"
            type="text"
            onChange={e => props.onAmountChange(e.target.value)}
            placeholder="ex: 1.5"
            className={
              classNames(
                'form__input',
                'form__input--select',
                'form__input--misc',
                { isError: props.isError === 'amount' })
            }
            value={props.amountValue}
          />
          <Select
            name="amount-unit"
            options={[
              { label: 'oz', value: 'oz' },
              { label: 'lb', value: 'lb' },
              { label: 'mg', value: 'mg' },
              { label: 'g', value: 'g' },
              { label: 'kg', value: 'kg' },
              { label: 'tsp', value: 'tsp' },
              { label: 'tbsp', value: 'tbsp' },
              { label: 'l', value: 'l' },
              { label: 'ml', value: 'ml' },
              { label: 'cup', value: 'cup' },
              { label: 'gal', value: 'gal' },
              { label: 'cup', value: 'cup' },
              { label: 'pt', value: 'pt' },
              { label: 'qt', value: 'qt' },
              { label: 'items', value: 'items' },
            ]}
            className="form__select--input misc__select--input"
            onChange={props.onAmountUnitChange}
            value={props.amountUnitValue}
            clearable={false}
            simpleValue={true} //eslint-disable-line
          />
        </div>
        <div className="misc-form-group">
          <label htmlFor="misc-amount" className="form__label">Time</label>
          <input
            id="misc-time"
            type="text"
            onChange={e => props.onTimeChange(e.target.value)}
            placeholder="ex: 10"
            className={
              classNames(
                'form__input',
                'form__input--select',
                'form__input--misc',
                { isError: props.isError === 'amount' })
            }
            value={props.timeValue}
          />
          <Select
            name="misc-time-unit"
            options={[
              { label: 'min', value: 'min' },
              { label: 'hours', value: 'hours' },
              { label: 'days', value: 'days' },
              { label: 'weeks', value: 'weeks' },
              { label: 'years', value: 'years' },
            ]}
            className="form__select--input misc__select--input"
            onChange={props.onTimeUnitChange}
            value={props.timeUnitValue}
            clearable={false}
            simpleValue={true} //eslint-disable-line
          />
        </div>
        <div className="misc-form-group">
          <label htmlFor="stage" className="form__label">Stage</label>
          <Select
            name="stage"
            options={[
              { label: 'Boil', value: 'boil' },
              { label: 'Mash', value: 'mash' },
              { label: 'Primary', value: 'primary' },
              { label: 'Secondary', value: 'secondary' },
              { label: 'Bottle', value: 'bottle' },
              { label: 'Keg', value: 'keg' },
            ]}
            className="input__select"
            onChange={props.onStageChange}
            value={props.stageValue}
            simpleValue={true} //eslint-disable-line
            clearable={false}
          />
        </div>
      </div>
    );
  }
}

export default MiscModalInput;
