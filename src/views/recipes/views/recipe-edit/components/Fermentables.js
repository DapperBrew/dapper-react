import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// actions
import { showModal, showCustomModal, modalInfo } from '../actions/modals';

// Components
import Card from '../../../../../components/Card';
import FermentableList from './FermentableList';
import FermentableModal from './FermentableModal';
import FermentableEditModal from './FermentableEditModal';
import FermentableCustomModal from './FermentableCustomModal';
import AddButton from './AddButton';


const Fermentables = (props) => {
  const { dispatch, recipeStaged } = props;
  const name = modalInfo.FERMENTABLE.NAME;
  let recipeTable;
  if (recipeStaged.fermentables.length > 0) {
    recipeTable = (
      <table className="recipe-table">
        <thead>
          <tr className="">
            <th className="recipe-table__header text-left">Name</th>
            <th className="recipe-table__header text-right">Weight</th>
            <th className="recipe-table__header text-right">Color</th>
            <th className="recipe-table__header text-right">%</th>
            <th className="recipe-table__header text-right">Actions</th>
          </tr>
        </thead>
        <FermentableList />
      </table>
    );
  }
  return (
    <div>
      <Card cardTitle="Fermentables">
        {recipeTable}
        <AddButton
          onPrimaryClick={() => dispatch(showModal(name))}
          onSecondaryClick={() => dispatch(showCustomModal('customFermentable'))}
        />
        <FermentableModal />
        <FermentableEditModal />
        <FermentableCustomModal />
      </Card>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  recipeStaged: state.recipeEdit.recipeStaged,
});

Fermentables.propTypes = {
  dispatch: PropTypes.func.isRequired,
  recipeStaged: PropTypes.object, // eslint-disable-line
};

export default connect(mapStateToProps)(Fermentables);
