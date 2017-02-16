import React from 'react';
import classNames from 'classnames';


class YeastModalInput extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedItem && nextProps.selectedItem !== this.props.selectedItem) {
      const selectedItem = this.props.yeasts[nextProps.selectedItem];

      const avAttenuation = (selectedItem.attenuationMin + selectedItem.attenuationMax) / 2;

      this.props.onAttenuationChange(avAttenuation);
      this.props.onMinTempChange(selectedItem.fermentTempMin);
      this.props.onMaxTempChange(selectedItem.fermentTempMax);
    }
  }


  render() {
    const props = this.props;
    return (
      <div className="yeast-modal-input">
        <div className="yeast-form-group">
          <label htmlFor="attenuation" className="form__label">Attenuation</label>
          <input
            id="attenuation"
            type="text"
            onChange={e => props.onAttenuationChange(e.target.value)}
            placeholder="ex: 78"
            className={
              classNames(
                'form__input',
                'form__input--measure',
                'yeast-form-group__attenuation',
                { isError: props.errorField === 'attenuation' })
              }
            value={props.attenuationValue}
          />
          <div
            className={classNames(
              'form__measure',
              'yeast-form-group__unit',
              { isError: props.errorField === 'attenuation' },
            )}
          >%</div>
        </div>

        <div className="yeast-form-group">
          <label htmlFor="mintemp" className="form__label">Min Temperature</label>
          <input
            id="mintemp"
            type="text"
            onChange={e => props.onMinTempChange(e.target.value)}
            placeholder="ex: 65"
            className={
              classNames(
                'form__input',
                'form__input--measure',
                'yeast-form-group__temp',
                { isError: props.errorField === 'mintemp' })
              }
            value={props.minTempValue}
          />
          <div
            className={classNames(
              'form__measure',
              'yeast-form-group__unit',
              { isError: props.errorField === 'mintemp' },
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
            onChange={e => props.onMaxTempChange(e.target.value)}
            placeholder="ex: 70"
            className={
              classNames(
                'form__input',
                'form__input--measure',
                'yeast-form-group__temp',
                { isError: props.errorField === 'maxtemp' })
              }
            value={props.maxTempValue}
          />
          <div
            className={classNames(
              'form__measure',
              'yeast-form-group__unit',
              { isError: props.errorField === 'maxtemp' },
            )}
          >
            &deg;F
          </div>
        </div>
      </div>
    );
  }
}

YeastModalInput.propTypes = {
  onAttenuationChange: React.PropTypes.func,
  onMinTempChange: React.PropTypes.func,
  onMaxTempChange: React.PropTypes.func,
  yeasts: React.PropTypes.object, // eslint-disable-line
  selectedItem: React.PropTypes.string,
};

export default YeastModalInput;
