import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

// components
import Select, { Creatable } from 'react-select';

// actions
import {
  updateFermentableWeight,
  updateFermentableWeightUnit,
  updateFermentableColor,
  updateFermentablePotential,
  updateFermentableMaltster,
  updateFermentableName,
  updateFermentableType,
  updateFermentableInMash,
  updateFermentableAfterBoil,
  updateIndex,
} from '../actions/modals';


class FermentableModalInput extends React.Component {

  componentWillMount() {
    const { recipeFermentables, modal, dispatch } = this.props;
    const { modalIsEdit, modalKey } = modal;

    if (modalIsEdit) {
      const selectedItem = recipeFermentables.find(fermentable => fermentable.key === modalKey);
      const itemIndex = recipeFermentables.indexOf(selectedItem);
      dispatch(updateIndex(itemIndex));
      dispatch(updateFermentableName(selectedItem.name));
      dispatch(updateFermentableColor(selectedItem.srm));
      dispatch(updateFermentablePotential(selectedItem.potential));
      dispatch(updateFermentableWeightUnit(selectedItem.unit));
      dispatch(updateFermentableWeight(selectedItem.weight));
      dispatch(updateFermentableMaltster(selectedItem.maltster ? selectedItem.maltster : ''));
      dispatch(updateFermentableType(selectedItem.type));
      dispatch(updateFermentableInMash(selectedItem.inMash));
      dispatch(updateFermentableAfterBoil(selectedItem.afterBoil));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, modal, fermentables } = this.props;
    const nextPropsModal = nextProps.modal;

    if (nextPropsModal.selectedItem && nextPropsModal.selectedItem !== modal.selectedItem) {
      const selectedItem = fermentables[nextProps.modal.selectedItem];

      dispatch(updateFermentableColor(selectedItem.srm));
      dispatch(updateFermentablePotential(selectedItem.potential));
    }
  }


  render() {
    const { modal, dispatch } = this.props;
    const {
      modalErrorField,
      fermentableName,
      fermentableWeight,
      fermentableWeightUnit,
      fermentableColor,
      fermentablePotential,
      fermentableMaltster,
      fermentableType,
      fermentableInMash,
      fermentableAfterBoil,
    } = modal;

    return (
      <div className="fermentable-modal-input">
        <div className="fermentable-form-group">
          <label htmlFor="weight" className="form__label">Weight</label>
          <input
            id="weight"
            type="text"
            onChange={e => dispatch(updateFermentableWeight(e.target.value))}
            placeholder="ex: 2"
            className={
              classNames(
                'form__input',
                'form__input--select',
                { isError: modalErrorField === 'weight' },
              )
            }
            value={fermentableWeight}
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
            onChange={unit => dispatch(updateFermentableWeightUnit(unit))}
            value={fermentableWeightUnit}
            clearable={false}
            simpleValue={true} //eslint-disable-line
          />
        </div>

        <div className="fermentable-form-group">
          <label htmlFor="color" className="form__label">Color (SRM)</label>
          <input
            id="color"
            type="text"
            onChange={e => dispatch(updateFermentableColor(e.target.value))}
            placeholder="ex: 4"
            className={
              classNames(
                'form__input',
                { isError: modalErrorField === 'color' })
            }
            value={fermentableColor}
          />
        </div>

        <div className="fermentable-form-group">
          <label htmlFor="potential" className="form__label">Potential</label>
          <input
            id="potential"
            type="text"
            onChange={e => dispatch(updateFermentablePotential(e.target.value))}
            placeholder="ex: 1.033"
            className={
              classNames(
                'form__input',
                { isError: modalErrorField === 'potential' })
            }
            value={fermentablePotential}
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
            onChange={maltster => dispatch(updateFermentableMaltster(maltster))}
            value={fermentableMaltster}
          />
        </div>

      </div>
    );
  }
}

FermentableModalInput.propTypes = {
  dispatch: React.PropTypes.func,
  fermentables: React.PropTypes.object, // eslint-disable-line
  recipeFermentables: React.PropTypes.array, // eslint-disable-line
  modal: React.PropTypes.object, // eslint-disable-line
  props: React.PropTypes.array, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  fermentables: state.data.fermentables,
  recipeFermentables: state.recipeEdit.recipeStaged.fermentables,
});

export default connect(mapStateToProps)(FermentableModalInput);
