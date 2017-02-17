import React from 'react';
import classNames from 'classnames';
import Select, { Creatable } from 'react-select';

class FermentableModalInput extends React.Component {

  componentWillMount() {
    const { recipeFermentables, modalKey, isEdit } = this.props;
    if (isEdit) {
      const selectedItem = recipeFermentables.find(fermentable => fermentable.key === modalKey);
      const itemIndex = recipeFermentables.indexOf(selectedItem);

      this.props.onColorChange(selectedItem.srm);
      this.props.onPotentialChange(selectedItem.potential);
      this.props.onWeightChange(selectedItem.weight);
      this.props.onMaltsterChange(selectedItem.maltster);
      this.props.onNameChange(selectedItem.name);
      this.props.onIndexChange(itemIndex);
      this.props.onTypeChange(selectedItem.type);
      this.props.onInMashChange(selectedItem.inMash);
      this.props.onAfterBoilChange(selectedItem.afterBoil);
    }
  }

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
          />
        </div>

      </div>
    );
  }
}

FermentableModalInput.propTypes = {
  onPotentialChange: React.PropTypes.func,
  onColorChange: React.PropTypes.func,
  onWeightChange: React.PropTypes.func,
  onMaltsterChange: React.PropTypes.func,
  fermentables: React.PropTypes.object, // eslint-disable-line
  selectedItem: React.PropTypes.string,
  isEdit: React.PropTypes.bool,
  modalKey: React.PropTypes.string,
  recipeFermentables: React.PropTypes.array, // eslint-disable-line
};

export default FermentableModalInput;
