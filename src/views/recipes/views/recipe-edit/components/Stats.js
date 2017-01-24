import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../../../../../components/Card';

// selectors
import { estimateOriginalGravity } from '../selectors/recipeEdit';

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
          <div className="stat__content">TBD</div>
        </div>
        <div className="stat">
          <h4 className="stat__title">Bitternes</h4>
          <div className="stat__content">TBD</div>
        </div>
        <div className="stat">
          <h4 className="stat__title">Color</h4>
          <div className="stat__content">TBD</div>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  data: state.data,
  originalGravity: estimateOriginalGravity(state),
});

export default connect(mapStateToProps)(Stats);
