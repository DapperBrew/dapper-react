import React from 'react';
import classNames from 'classnames';
// import Select from 'react-select';
import Select, { Creatable } from 'react-select';


class FermentableModalInput extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedItem && nextProps.selectedItem !== this.props.selectedItem) {
      const selectedItem = this.props.fermentables[nextProps.selectedItem];

      this.props.onColorChange(selectedItem.srm);
      this.props.onPotentialChange(selectedItem.potential);
    }
  }

  onNewOption = (newOption) => {
    console.log('YO YO OY', newOption);
    return {
      label: newOption.inputValue,
      value: newOption.inputvalue,
      labelKey: newOption.inputValue,
      valueKey: newOption.inputValue,
    };

    // return { value: newOption.label, label: newOption.label };
  }

  newOptionCreator = ({ label, labelKey, valueKey }) => {
    console.log('label', label);
    console.log('labelKey', labelKey);
    console.log('valueKey', valueKey);
    const option = {};
    option[valueKey] = label;
    option[labelKey] = label;
    option.className = 'Select-create-option-placeholder';
    console.log('option', option);
    return option;
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

        <div className="fermentable-form-group">
          <label htmlFor="maltster" className="form__label">Maltster (optional)</label>
          <Creatable
            name="maltster"
            createable="true"
            options={[
              { label: 'Bairds', value: 'Bairds' },
              { label: 'Boortmalt', value: 'Boortmalt' },
              { label: 'Briess', value: 'Briess' },
              { label: 'Castle', value: 'Castle' },
              { label: 'Crisp', value: 'Crisp' },
              { label: 'Dingemans', value: 'Dingemans' },
              { label: 'Tuckers', value: 'Tuckers' },
              { label: 'Gambrinus', value: 'Gambrinus' },
              { label: 'GlobalMalt', value: 'globalMalt' },
              { label: 'Great Western', value: 'Great Western' },
              { label: 'Muntons', value: 'Muntons' },
              { label: 'Rahr', value: 'Rahr' },
              { label: 'Simpsons', value: 'Simpsons' },
              { label: 'Fawcetts', value: 'Fawcetts' },
              { label: 'Wayermann', value: 'Weyermann' },
            ]}
            className="input__select"
            onChange={props.onMaltsterChange}
            value={props.maltsterValue}
            // simpleValue={true} //eslint-disable-line
            // newOptionCreator={this.newOptionCreator}
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
