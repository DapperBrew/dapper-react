import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

// components
import Select from 'react-select';

// actions
import {
  updateHopWeight,
  updateHopTime,
  updateHopStage,
  updateHopType,
  updateHopAlpha,
  updateHopName,
  updateIndex,
} from '../actions/modals';

class HopModalInput extends React.Component {

  componentWillMount() {
    const { recipeHops, modal, dispatch } = this.props;
    const { modalIsEdit, modalKey } = modal;

    if (modalIsEdit) {
      const selectedItem = recipeHops.find(hop => hop.key === modalKey);
      const itemIndex = recipeHops.indexOf(selectedItem);

      dispatch(updateIndex(itemIndex));
      dispatch(updateHopWeight(selectedItem.weight));
      dispatch(updateHopStage(selectedItem.stage));
      dispatch(updateHopTime(selectedItem.time));
      dispatch(updateHopType(selectedItem.type));
      dispatch(updateHopAlpha(selectedItem.alpha));
      dispatch(updateHopName(selectedItem.name));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, modal, hops } = this.props;
    const nextPropsModal = nextProps.modal;

    if (nextPropsModal.selectedItem && nextPropsModal.selectedItem !== modal.selectedItem) {
      const selectedItem = hops[nextProps.modal.selectedItem];
      const hopAA = (selectedItem.alphaAcidMax + selectedItem.alphaAcidMin) / 2;

      dispatch(updateHopAlpha(hopAA));
    }
  }

  render() {
    const { modal, dispatch } = this.props;
    const {
      modalErrorField,
      hopName,
      hopWeight,
      hopTime,
      hopStage,
      hopType,
      hopAlpha,
    } = modal;
    let customInfoName;

    if (modal.modalIsCustom || modal.modalIsEdit) {
      customInfoName = (
        <div className="hop-custom-input">
          <div className="hop-form-group--name">
            <label htmlFor="name" className="form__label">Name</label>
            <input
              id="name"
              type="text"
              onChange={e => dispatch(updateHopName(e.target.value))}
              placeholder="ex: HBC 431"
              className={
                classNames(
                  'form__input',
                  { isError: modalErrorField === 'name' })
                }
              value={hopName}
            />
          </div>
        </div>
      );
    }
    return (
      <div>
        {customInfoName}
        <div className="hop-modal-input">
          <div className="hop-form-group">
            <label htmlFor="weight" className="form__label">Weight</label>
            <input
              id="weight"
              type="text"
              onChange={e => dispatch(updateHopWeight(e.target.value))}
              placeholder="ex: 1.5"
              className={
                classNames(
                  'form__input',
                  'form__input--measure',
                  'hop-form-group__weight',
                  { isError: modalErrorField === 'weight' })
                }
              value={hopWeight}
            />
            <div
              className={classNames(
                'form__measure',
                'hop-form-group__unit',
                { isError: modalErrorField === 'weight' },
              )}
            >
              oz
            </div>
          </div>
          <div className="hop-form-group">
            <label htmlFor="stage" className="form__label">Stage</label>
            <Select
              name="stage"
              options={[
                { label: 'Boil', value: 'boil' },
                { label: 'Dry Hop', value: 'dry hop' },
                { label: 'Mash', value: 'mash' },
                { label: 'First Wort', value: 'first wort' },
                { label: 'Whirlpool', value: 'whirlpool' },
              ]}
              className="input__select"
              onChange={e => dispatch(updateHopStage(e))}
              value={hopStage}
              simpleValue={true} //eslint-disable-line
              clearable={false}
              searchable={false}
            />
          </div>
          <div className="hop-form-group">
            <label htmlFor="time" className="form__label">Time</label>
            <input
              id="time"
              type="text"
              onChange={e => dispatch(updateHopTime(e.target.value))}
              placeholder={hopStage === 'dry hop' ? 'ex: 3' : 'ex: 60'}
              className={
                classNames(
                  'form__input',
                  'form__input--measure',
                  'hop-form-group__weight',
                  { isError: modalErrorField === 'time' })
                }
              value={hopTime}
            />
            <div
              className={classNames(
                'form__measure',
                'hop-form-group__unit',
                { isError: modalErrorField === 'time' },
              )}
            >
              {hopStage === 'dry hop' ? 'days' : 'min'}
            </div>
          </div>
          <div className="hop-form-group">
            <label htmlFor="type" className="form__label">Type</label>
            <Select
              name="type"
              options={[
                { label: 'Pellet', value: 'pellet' },
                { label: 'Leaf', value: 'leaf' },
              ]}
              className="input__select"
              onChange={e => dispatch(updateHopType(e))}
              value={hopType}
              simpleValue={true} //eslint-disable-line
              clearable={false}
              searchable={false}
            />
          </div>
          <div className="hop-form-group">
            <label htmlFor="time" className="form__label">Alpha Acid %</label>
            <input
              id="time"
              type="text"
              onChange={e => dispatch(updateHopAlpha(e.target.value))}
              placeholder="ex: 13"
              className={
                classNames(
                  'form__input',
                  'form__input--measure',
                  'hop-form-group__alpha',
                  { isError: modalErrorField === 'alpha' })
                }
              value={hopAlpha}
            />
            <div
              className={classNames(
                'form__measure',
                'hop-form-group__unit',
                { isError: modalErrorField === 'alpha' },
              )}
            >
              %
            </div>
          </div>
        </div>
      </div>
    );
  }
}


HopModalInput.propTypes = {
  hops: React.PropTypes.object, // eslint-disable-line
  recipeHops: React.PropTypes.array, //eslint-disable-line
  modal: React.PropTypes.object, // eslint-disable-line
  props: React.PropTypes.array, // eslint-disable-line
  dispatch: React.PropTypes.func,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  hops: state.data.hops,
  recipeHops: state.recipeEdit.recipeStaged.hops,
});

export default connect(mapStateToProps)(HopModalInput);
