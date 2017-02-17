import React from 'react';
import classNames from 'classnames';
import Select from 'react-select';

class HopModalInput extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedItem && nextProps.selectedItem !== this.props.selectedItem) {
      const selectedItem = this.props.hops[nextProps.selectedItem];
      const hopAA = (selectedItem.alphaAcidMax + selectedItem.alphaAcidMin) / 2;

      this.props.onAlphaChange(hopAA);
    }
  }

  render() {
    const props = this.props;
    return (
      <div className="hop-modal-input">
        <div className="hop-form-group">
          <label htmlFor="weight" className="form__label">Weight</label>
          <input
            id="weight"
            type="text"
            onChange={e => props.onWeightChange(e.target.value)}
            placeholder="ex: 1.5"
            className={
              classNames(
                'form__input',
                'form__input--measure',
                'hop-form-group__weight',
                { isError: props.errorField === 'weight' })
              }
            value={props.weightValue}
          />
          <div
            className={classNames(
              'form__measure',
              'hop-form-group__unit',
              { isError: props.errorField === 'weight' },
            )}
          >oz</div>
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
            onChange={props.onStageChange}
            value={props.stageValue}
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
            onChange={e => props.onTimeChange(e.target.value)}
            placeholder={props.stageValue === 'dry hop' ? 'ex: 3' : 'ex: 60'}
            className={
              classNames(
                'form__input',
                'form__input--measure',
                'hop-form-group__weight',
                { isError: props.errorField === 'time' })
            }
            value={props.timeValue}
          />
          <div
            className={classNames(
              'form__measure',
              'hop-form-group__unit',
              { isError: props.errorField === 'time' },
            )}
          >{props.stageValue === 'dry hop' ? 'days' : 'min'}</div>
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
            onChange={props.onTypeChange}
            value={props.typeValue}
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
            onChange={e => props.onAlphaChange(e.target.value)}
            placeholder="ex: 13"
            className={
              classNames(
                'form__input',
                'form__input--measure',
                'hop-form-group__alpha',
                { isError: props.errorField === 'alpha' })
            }
            value={props.alphaValue}
          />
          <div
            className={classNames(
              'form__measure',
              'hop-form-group__unit',
              { isError: props.errorField === 'alpha' },
            )}
          >
            %
          </div>
        </div>
      </div>
    );
  }
}

HopModalInput.propTypes = {
  selectedItem: React.PropTypes.string.isRequired,
  hops: React.PropTypes.array, // eslint-disable-line
  onAlphaChange: React.PropTypes.func,
};

export default HopModalInput;
