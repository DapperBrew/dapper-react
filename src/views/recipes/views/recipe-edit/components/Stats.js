import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../../../../../components/Card';

// selectors
import { estimateOriginalGravity, getRecipeIbu, getRecipeSrm, getABV } from '../selectors/recipeEdit';

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
      </Card>
    );
  }
}

Stats.propTypes = {
  originalGravity: React.PropTypes.string.isRequired,
  totalIbu: React.PropTypes.number.isRequired,
  srm: React.PropTypes.number.isRequired,
  abv: React.PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  data: state.data,
  originalGravity: estimateOriginalGravity(state),
  totalIbu: getRecipeIbu(state),
  srm: getRecipeSrm(state),
  abv: getABV(state),
});

export default connect(mapStateToProps)(Stats);
