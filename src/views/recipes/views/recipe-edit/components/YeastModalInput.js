import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';


// actions
import {
  updateYeastAttenuation,
  updateYeastMinTemp,
  updateYeastMaxTemp,
  updateYeastSupplier,
  updateYeastSupplierId,
  updateYeastName,
  updateIndex,
} from '../actions/modals';


class YeastModalInput extends React.Component {

  componentWillMount() {
    const { recipeYeasts, modal, dispatch } = this.props;
    const { modalIsEdit, modalKey } = modal;

    if (modalIsEdit) {
      const selectedItem = recipeYeasts.find(yeast => yeast.key === modalKey);
      const itemIndex = recipeYeasts.indexOf(selectedItem);

      dispatch(updateIndex(itemIndex));
      dispatch(updateYeastName(selectedItem.name));
      dispatch(updateYeastAttenuation(selectedItem.averageAttenuation));
      dispatch(updateYeastMinTemp(selectedItem.minTemp));
      dispatch(updateYeastMaxTemp(selectedItem.maxTemp));
      dispatch(updateYeastSupplier(selectedItem.supplier));
      dispatch(updateYeastSupplierId(selectedItem.supplierId));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, modal, yeasts } = this.props;
    const nextPropsMOdal = nextProps.modal;

    if (nextPropsMOdal.selectedItem && nextPropsMOdal.selectedItem !== modal.selectedItem) {
      const selectedItem = yeasts[nextProps.modal.selectedItem];

      const avAttenuation = (selectedItem.attenuationMin + selectedItem.attenuationMax) / 2;

      dispatch(updateYeastAttenuation(avAttenuation));
      dispatch(updateYeastMinTemp(selectedItem.fermentTempMin));
      dispatch(updateYeastMaxTemp(selectedItem.fermentTempMax));
    }
  }


  render() {
    const { modal, dispatch } = this.props;
    const {
      modalErrorField,
      yeastName,
      yeastSupplier,
      yeastSupplierId,
      yeastAttenuation,
      yeastMinTemp,
      yeastMaxTemp,
    } = modal;
    let customInfoName;
    let customInfoAdvanced;

    if (modal.modalIsCustom || modal.modalIsEdit) {
      customInfoName = (
        <div className="yeast-custom-input">
          <div className="yeast-form-group--name">
            <label htmlFor="name" className="form__label">Name</label>
            <input
              id="name"
              type="text"
              onChange={e => dispatch(updateYeastName(e.target.value))}
              placeholder="ex: Custom Yeast Strain"
              className={
                classNames(
                  'form__input',
                  { isError: modalErrorField === 'name' })
                }
              value={yeastName}
            />
          </div>
        </div>
      );
      customInfoAdvanced = (
        <div className="yeast-advanced-input">
          <div className="yeast-form-group">
            <label htmlFor="name" className="form__label">Supplier (optional)</label>
            <input
              id="name"
              type="text"
              onChange={e => dispatch(updateYeastSupplier(e.target.value))}
              placeholder="ex: Dharma"
              className={
                classNames(
                  'form__input',
                  { isError: modalErrorField === 'supplier' })
                }
              value={yeastSupplier}
            />
          </div>
          <div className="yeast-form-group">
            <label htmlFor="name" className="form__label">Supplier ID (optional)</label>
            <input
              id="name"
              type="text"
              onChange={e => dispatch(updateYeastSupplierId(e.target.value))}
              placeholder="ex: 1138"
              className={
                classNames(
                  'form__input',
                  { isError: modalErrorField === 'supplierId' })
                }
              value={yeastSupplierId}
            />
          </div>
          <div className="yeast-form-group" />
        </div>
      );
    }

    return (
      <div>
        {customInfoName}
        <div className="yeast-modal-input">
          <div className="yeast-form-group">
            <label htmlFor="attenuation" className="form__label">Attenuation</label>
            <input
              id="attenuation"
              type="text"
              onChange={e => dispatch(updateYeastAttenuation(e.target.value))}
              placeholder="ex: 78"
              className={
                classNames(
                  'form__input',
                  'form__input--measure',
                  'yeast-form-group__attenuation',
                  { isError: modalErrorField === 'attenuation' })
                }
              value={yeastAttenuation}
            />
            <div
              className={classNames(
                'form__measure',
                'yeast-form-group__unit',
                { isError: modalErrorField === 'attenuation' },
              )}
            >%</div>
          </div>

          <div className="yeast-form-group">
            <label htmlFor="mintemp" className="form__label">Min Temperature</label>
            <input
              id="mintemp"
              type="text"
              onChange={e => dispatch(updateYeastMinTemp(e.target.value))}
              placeholder="ex: 65"
              className={
                classNames(
                  'form__input',
                  'form__input--measure',
                  'yeast-form-group__temp',
                  { isError: modalErrorField === 'mintemp' })
                }
              value={yeastMinTemp}
            />
            <div
              className={classNames(
                'form__measure',
                'yeast-form-group__unit',
                { isError: modalErrorField === 'mintemp' },
              )}
            >
              &deg;F
            </div>
          </div>

          <div className="yeast-form-group">
            <label htmlFor="maxtemp" className="form__label">Max Temperature</label>
            <input
              id="maxtemp"
              type="text"
              onChange={e => dispatch(updateYeastMaxTemp(e.target.value))}
              placeholder="ex: 70"
              className={
                classNames(
                  'form__input',
                  'form__input--measure',
                  'yeast-form-group__temp',
                  { isError: modalErrorField === 'maxtemp' })
                }
              value={yeastMaxTemp}
            />
            <div
              className={classNames(
                'form__measure',
                'yeast-form-group__unit',
                { isError: modalErrorField === 'maxtemp' },
              )}
            >
              &deg;F
            </div>
          </div>
        </div>
        {customInfoAdvanced}
      </div>
    );
  }
}

YeastModalInput.propTypes = {
  dispatch: PropTypes.func,
  yeasts: PropTypes.object, // eslint-disable-line
  hops: PropTypes.object, // eslint-disable-line
  recipeYeasts: PropTypes.array, // eslint-disable-line
  modal: PropTypes.object, // eslint-disable-line
  props: PropTypes.array, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  yeasts: state.data.yeasts,
  recipeYeasts: state.recipeEdit.recipeStaged.yeasts,
});

export default connect(mapStateToProps)(YeastModalInput);
