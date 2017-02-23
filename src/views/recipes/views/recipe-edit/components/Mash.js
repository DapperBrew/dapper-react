import React from 'react';
import { connect } from 'react-redux';

// components
import Card from '../../../../../components/Card';

// actions
import { setMashTemp } from '../actions/recipeStaged';

const Mash = (props) => {
  const { dispatch, modal } = props;
  const { mashTemp } = modal;
  return (
    <Card cardTitle="Mash Info">
      <div className="mash-recipe-input">
        <div className="mash-form-group mash-form-group--temp">
          <label htmlFor="mash-temp" className="form__label">Recommended Mash Temperature</label>
          <input
            id="mash-temp"
            type="text"
            onChange={e => dispatch(setMashTemp(e.target.value))}
            placeholder="ex 151"
            className="form__input form__input--measure form__input--mash"
            value={mashTemp}
          />
          <div className="form__measure form__measure--mash">&deg;F</div>
        </div>
      </div>
    </Card>
  );
};

Mash.propTypes = {
  dispatch: React.PropTypes.func,
  modal: React.PropTypes.object // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});

export default connect(mapStateToProps)(Mash);
