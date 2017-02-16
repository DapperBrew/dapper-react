import React from 'react';
import classNames from 'classnames';
import Select from 'react-select';


class FermentableModalInput extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedItem && nextProps.selectedItem !== this.props.selectedItem) {
      const selectedItem = this.props.fermentables[nextProps.selectedItem];

      this.props.onColorChange(selectedItem.srm);
      this.props.onPotentialChange(selectedItem.potential);
    }
  }


  render() {
    const props = this.props;
    return (
      <div className="fermentable-modal-input">
        <div className="fermentable-form-group">
          <label htmlFor="weight" className="form__label">Weight</label>
          <input
            id="weight"
            type="text"
            onChange={e => props.onWeightChange(e.target.value)}
            placeholder="ex: 2"
            className={
              classNames(
                'form__input',
                'form__input--select',
                { isError: props.errorField === 'weight' },
              )
            }
            value={props.weightValue}
          />
          <Select
            name="weight-unit"
            options={[
              { label: 'lb', value: 'lb' },
              { label: 'oz', value: 'oz' },
            ]}
            className={
              classNames(
                'form__select--input',
              )
            }
            onChange={props.onWeightUnitChange}
            value={props.weightUnitValue}
            clearable={false}
            simpleValue={true} //eslint-disable-line
          />
        </div>

        <div className="fermentable-form-group">
          <label htmlFor="color" className="form__label">Color (SRM)</label>
          <input
            id="color"
            type="text"
            onChange={e => props.onColorChange(e.target.value)}
            placeholder="ex: 4"
            className={
              classNames(
                'form__input',
                { isError: props.errorField === 'color' })
            }
            value={props.colorValue}
          />
        </div>

        <div className="fermentable-form-group">
          <label htmlFor="potential" className="form__label">Potential</label>
          <input
            id="potential"
            type="text"
            onChange={e => props.onPotentialChange(e.target.value)}
            placeholder="ex: 1.033"
            className={
              classNames(
                'form__input',
                { isError: props.errorField === 'potential' })
            }
            value={props.potentialValue}
          />
        </div>

      </div>
    );
  }
}

FermentableModalInput.propTypes = {
  // errorField: React.PropTypes.string,
  // onWeightUnitChange: React.PropTypes.func,
  // weightValue: React.PropTypes.string,
  // weightUnitValue: React.PropTypes.string,
  // colorValue: React.PropTypes.string,
  // yieldValue: React.PropTypes.string,
  onPotentialChange: React.PropTypes.func,
  onColorChange: React.PropTypes.func,
  fermentables: React.PropTypes.object, // eslint-disable-line
  selectedItem: React.PropTypes.string,
};

export default FermentableModalInput;
