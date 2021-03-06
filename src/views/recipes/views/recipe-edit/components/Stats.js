import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../../../../../components/Card';

// selectors
import {
  getOriginalGravity,
  getRecipeIbu,
  getRecipeSrm,
  getABV,
  getFinalGravity,
  getPreBoilGravity,
  getPreBoilVolume,
} from '../selectors/recipeEdit';

const Stats = props => (
  <Card
    cardHeader={true} // eslint-disable-line
    cardTitle="Stats"
  >
    <div className="stat">
      <h5 className="stat__title">Original Gravity</h5>
      <div className="stat__content">{props.originalGravity}</div>
    </div>
    <div className="stat">
      <h5 className="stat__title">ABV</h5>
      <div className="stat__content">{props.abv} %</div>
    </div>
    <div className="stat">
      <h5 className="stat__title">Bitterness</h5>
      <div className="stat__content">{props.totalIbu} IBU</div>
    </div>
    <div className="stat">
      <h5 className="stat__title">Color</h5>
      <div className="stat__content">{props.srm} SRM</div>
    </div>
    <ul className="small-stats">
      <li className="small-stats__item">
        <span className="small-stats__name">Estimated Pre-Boil Volume:</span>
        <span className="small-stats__number">{props.preBoilVolume} gal</span>
      </li>
      <li className="small-stats__item">
        <span className="small-stats__name">Estimated Pre-Boil Gravity:</span>
        <span className="small-stats__number">{props.preBoilGravity.toFixed(3)}</span>
      </li>
      <li className="small-stats__item">
        <span className="small-stats__name">Estimated Final Gravity:</span>
        <span className="small-stats__number">{props.finalGravity}</span>
      </li>
    </ul>
  </Card>
);


Stats.propTypes = {
  originalGravity: PropTypes.string.isRequired,
  totalIbu: PropTypes.number.isRequired,
  srm: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  preBoilVolume: PropTypes.string.isRequired,
  preBoilGravity: PropTypes.number.isRequired,
  finalGravity: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  data: state.data,
  originalGravity: getOriginalGravity(state),
  totalIbu: getRecipeIbu(state),
  srm: getRecipeSrm(state),
  abv: getABV(state),
  finalGravity: getFinalGravity(state),
  preBoilGravity: getPreBoilGravity(state),
  preBoilVolume: getPreBoilVolume(state),
});

export default connect(mapStateToProps)(Stats);
