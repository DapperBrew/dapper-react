import React from 'react';
import { connect } from 'react-redux';

// actions
import { showModal, modalInfo } from '../actions/modals';

// Components
import Card from '../../../../../components/Card';
import HopList from './HopList';
import HopModal from './HopModal';
import HopEditModal from './HopEditModal';
import HopCustomModal from './HopCustomModal';

const Hops = (props) => {
  const { dispatch } = props;
  const name = modalInfo.HOP.NAME;
  return (
    <Card cardTitle="Hops">
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

      <button className="mt1" onClick={() => dispatch(showModal(name))}>
        Add New
      </button>
      <button className="mt1 ml1" onClick={() => dispatch(showModal('customHop'))}>
        Add Custom
      </button>
      <HopModal />
      <HopEditModal />
      <HopCustomModal />
    </Card>
  );
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});

Hops.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Hops);
