import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

// Components
import Select from 'react-select';

// actions
import {
  updateMiscAmount,
  updateMiscAmountUnit,
  updateMiscTime,
  updateMiscTimeUnit,
  updateMiscStage,
  updateMiscName,
  updateIndex,
} from '../actions/modals';

class MiscModalInput extends React.Component {

  componentWillMount() {
    const { recipeMiscs, modal, dispatch } = this.props;
    const { modalIsEdit, modalKey } = modal;

    if (modalIsEdit) {
      const selectedItem = recipeMiscs.find(misc => misc.key === modalKey);
      const itemIndex = recipeMiscs.indexOf(selectedItem);

      dispatch(updateIndex(itemIndex));
      dispatch(updateMiscAmountUnit(selectedItem.amountUnit));
      dispatch(updateMiscAmount(selectedItem.amount));
      dispatch(updateMiscTimeUnit(selectedItem.timeUnit));
      dispatch(updateMiscTime(selectedItem.time));
      dispatch(updateMiscStage(selectedItem.stage));
      dispatch(updateMiscName(selectedItem.name));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, modal, miscs, batchVolume } = this.props;
    const nextPropsModal = nextProps.modal;

    // update the input fields with the default data from the API
    if (nextPropsModal.selectedItem && nextPropsModal.selectedItem !== modal.selectedItem) {
      const selectedItem = miscs[nextProps.modal.selectedItem];
      let amount = selectedItem.amount;
      // amount values from API are for 5 gallon batches
      // so adjust according to batch size
      if (batchVolume) {
        amount = (selectedItem.amount * (batchVolume / 5)).toFixed(1);
      }

      dispatch(updateMiscAmountUnit(selectedItem.amountUnit));
      dispatch(updateMiscAmount(amount));
      dispatch(updateMiscTimeUnit(selectedItem.timeUnit));
      dispatch(updateMiscTime(selectedItem.time));
      dispatch(updateMiscStage(selectedItem.stage));
    }
  }

  render() {
    const { modal, dispatch } = this.props;
    const {
      modalErrorField,
      miscName,
      miscAmount,
      miscAmountUnit,
      miscTime,
      miscTimeUnit,
      miscStage,
    } = modal;
    let customInfoName;

    if (modal.modalIsCustom || modal.modalIsEdit) {
      customInfoName = (
        <div className="misc-custom-input">
          <div className="misc-form-group--name">
            <div className="form__label-wrap">
              <label htmlFor="name" className="form__label">Name</label>
            </div>
            <input
              id="name"
              type="text"
              onChange={e => dispatch(updateMiscName(e.target.value))}
              placeholder="ex: Chilis"
              className={
                classNames(
                  'form__input',
                  { isError: modalErrorField === 'name' })
                }
              value={miscName}
            />
          </div>
        </div>
      );
    }

    return (
      <div>
        {customInfoName}
        <div className="misc-modal-input">
          <div className="misc-form-group">
            <div className="form__label-wrap">
              <label htmlFor="misc-amount" className="form__label">Amount</label>
            </div>
            <input
              id="misc-amount"
              type="text"
              onChange={e => dispatch(updateMiscAmount(e.target.value))}
              placeholder="ex: 1.5"
              className={
                classNames(
                  'form__input',
                  'form__input--select',
                  'form__input--misc',
                  { isError: modalErrorField === 'amount' },
                )
              }
              value={miscAmount}
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
              className={
                classNames(
                  'form__select--input',
                  'misc__select--input',
                )
              }
              onChange={e => dispatch(updateMiscAmountUnit(e))}
              value={miscAmountUnit}
              clearable={false}
              simpleValue={true} //eslint-disable-line
            />
          </div>
          <div className="misc-form-group">
            <div className="form__label-wrap">
              <label htmlFor="misc-amount" className="form__label">Time</label>
            </div>
            <input
              id="misc-time"
              type="text"
              onChange={e => dispatch(updateMiscTime(e.target.value))}
              placeholder="ex: 10"
              className={
                classNames(
                  'form__input',
                  'form__input--select',
                  'form__input--misc',
                  { isError: modalErrorField === 'time' })
              }
              value={miscTime}
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
              onChange={e => dispatch(updateMiscTimeUnit(e))}
              value={miscTimeUnit}
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
              onChange={e => dispatch(updateMiscStage(e))}
              value={miscStage}
              simpleValue={true} //eslint-disable-line
              clearable={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

MiscModalInput.propTypes = {
  dispatch: PropTypes.func,
  miscs: PropTypes.object, // eslint-disable-line
  batchVolume: PropTypes.string,
  recipeMiscs: PropTypes.array, //eslint-disable-line
  modal: PropTypes.object, // eslint-disable-line
  props: PropTypes.array, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  miscs: state.data.miscs,
  recipeMiscs: state.recipeEdit.recipeStaged.miscs,
  batchVolume: state.recipeEdit.recipeStaged.batchVolume,
});

export default connect(mapStateToProps)(MiscModalInput);
