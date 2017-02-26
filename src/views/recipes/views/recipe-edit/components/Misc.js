import React from 'react';
import { connect } from 'react-redux';

// actions
import { showModal, showCustomModal, modalInfo } from '../actions/modals';

// Components
import Card from '../../../../../components/Card';
import MiscList from './MiscList';
import MiscModal from './MiscModal';
import MiscEditModal from './MiscEditModal';
import MiscCustomModal from './MiscCustomModal';

const Misc = (props) => {
  const { dispatch, recipeStaged } = props;
  const name = modalInfo.MISC.NAME;
  let recipeTable;
  if (recipeStaged.miscs.length > 0) {
    recipeTable = (
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
    );
  }
  return (
    <Card cardTitle="Spices & Misc">
      {recipeTable}

      <button className="button button--primary" onClick={() => dispatch(showModal(name))}>
        Add New
      </button>
      <button className="button button--secondary ml1" onClick={() => dispatch(showCustomModal('customMisc'))}>
        Add Custom
      </button>
      <MiscModal />
      <MiscEditModal />
      <MiscCustomModal />
    </Card>
  );
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  recipeStaged: state.recipeEdit.recipeStaged,
});

Misc.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  recipeStaged: React.PropTypes.object, // eslint-disable-line
};

export default connect(mapStateToProps)(Misc);
