import React from 'react';
import { connect } from 'react-redux';

// actions
import { showModal, modalInfo } from '../actions/modals';

// Components
import Card from '../../../../../components/Card';
import MiscList from './MiscList';
import MiscModal from './MiscModal';

const Misc = (props) => {
  const { dispatch } = props;
  const name = modalInfo.MISC.NAME;
  return (
    <Card cardTitle="Spices & Misc">
      <table className="recipe-table">
        <thead>
          <tr className="">
            <th className="recipe-table__header text-left">Name</th>
            <th className="recipe-table__header text-right">Amount</th>
            <th className="recipe-table__header text-right">Time</th>
            <th className="recipe-table__header text-right">Stage</th>
            <th className="recipe-table__header text-right">Actions</th>
          </tr>
        </thead>
        <MiscList />
      </table>

      <button className="mt1" onClick={() => dispatch(showModal(name))}>
        Test Button
      </button>
      <MiscModal />
    </Card>
  );
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});

Misc.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Misc);
