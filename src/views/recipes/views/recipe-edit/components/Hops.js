import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// actions
import { showModal, showCustomModal, modalInfo } from '../actions/modals';

// Components
import Card from '../../../../../components/Card';
import HopList from './HopList';
import HopModal from './HopModal';
import HopEditModal from './HopEditModal';
import HopCustomModal from './HopCustomModal';
import AddButton from './AddButton';

const Hops = (props) => {
  const { dispatch, recipeStaged } = props;
  const name = modalInfo.HOP.NAME;
  let recipeTable;
  if (recipeStaged.hops.length > 0) {
    recipeTable = (
      <table className="recipe-table">
        <thead>
          <tr className="">
            <th className="recipe-table__header text-left">Name</th>
            <th className="recipe-table__header text-right">Weight</th>
            <th className="recipe-table__header text-right">Time</th>
            <th className="recipe-table__header text-right">Stage</th>
            <th className="recipe-table__header text-right">IBU</th>
            <th className="recipe-table__header text-right">Actions</th>
          </tr>
        </thead>
        <HopList />
      </table>
    );
  }

  return (
    <Card cardTitle="Hops">
      {recipeTable}
      <AddButton
        onPrimaryClick={() => dispatch(showModal(name))}
        onSecondaryClick={() => dispatch(showCustomModal('customHop'))}
      />
      <HopModal />
      <HopEditModal />
      <HopCustomModal />
    </Card>
  );
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  recipeStaged: state.recipeEdit.recipeStaged,
});

Hops.propTypes = {
  dispatch: PropTypes.func.isRequired,
  recipeStaged: PropTypes.object, // eslint-disable-line
};

export default connect(mapStateToProps)(Hops);
