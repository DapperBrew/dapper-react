import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../../../../../components/Card';

// selectors
import {
  estimateOriginalGravity,
  getRecipeIbu,
  getRecipeSrm,
  getABV,
  getFinalGravity,
  getPreBoilGravity,
} from '../selectors/recipeEdit';

class Stats extends React.Component {
  render() {
    return (
      <Card cardTitle="Stats">
        <div className="stat">
          <h4 className="stat__title">Original Gravity</h4>
          <div className="stat__content">{this.props.originalGravity}</div>
        </div>
        <div className="stat">
          <h4 className="stat__title">ABV</h4>
          <div className="stat__content">{this.props.abv} %</div>
        </div>
        <div className="stat">
          <h4 className="stat__title">Bitterness</h4>
          <div className="stat__content">{this.props.totalIbu} IBU</div>
        </div>
        <div className="stat">
          <h4 className="stat__title">Color</h4>
          <div className="stat__content">{this.props.srm} SRM</div>
        </div>
        <ul className="small-stats">
          <li className="small-stats__item">
            <span className="small-stats__name">Estimated Pre-Boil Volume:</span>
            <span className="small-stats__number">{this.props.preBoilVolume} gal</span>
          </li>
          <li className="small-stats__item">
            <span className="small-stats__name">Estimated Pre-Boil Gravity:</span>
            <span className="small-stats__number">{this.props.preBoilGravity.toFixed(3)}</span>
          </li>
          <li className="small-stats__item">
            <span className="small-stats__name">Estimated Final Gravity:</span>
            <span className="small-stats__number">{this.props.finalGravity}</span>
          </li>
        </ul>
      </Card>
    );
  }
}

Stats.propTypes = {
  originalGravity: React.PropTypes.string.isRequired,
  totalIbu: React.PropTypes.number.isRequired,
  srm: React.PropTypes.number.isRequired,
  abv: React.PropTypes.number.isRequired,
  preBoilVolume: React.PropTypes.string.isRequired,
  preBoilGravity: React.PropTypes.number.isRequired,
  finalGravity: React.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  data: state.data,
  originalGravity: estimateOriginalGravity(state),
  totalIbu: getRecipeIbu(state),
  srm: getRecipeSrm(state),
  abv: getABV(state),
  finalGravity: getFinalGravity(state),
  preBoilGravity: getPreBoilGravity(state),
  preBoilVolume: state.recipeEdit.recipeStaged.boilVolume,
});

export default connect(mapStateToProps)(Stats);
