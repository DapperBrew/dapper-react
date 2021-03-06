import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// actions
import { showModal, showCustomModal, modalInfo } from '../actions/modals';


// Components
import Card from '../../../../../components/Card';
import YeastList from './YeastList';
import YeastModal from './YeastModal';
import YeastEditModal from './YeastEditModal';
import YeastCustomModal from './YeastCustomModal';
import AddButton from './AddButton';

const Yeast = (props) => {
  const { dispatch, recipeStaged } = props;
  const name = modalInfo.YEAST.NAME;
  let recipeTable;
  if (recipeStaged.yeasts.length > 0) {
    recipeTable = (
      <table className="recipe-table">
        <thead>
          <tr className="">
            <th className="recipe-table__header text-left">Name</th>
            <th className="recipe-table__header text-right">Ferm Temp</th>
            <th className="recipe-table__header text-right">Av. Attenuation</th>
            <th className="recipe-table__header text-right">Actions</th>
          </tr>
        </thead>
        <YeastList />
      </table>
    );
  }
  return (
    <Card cardTitle="Yeast">
      {recipeTable}
      <AddButton
        onPrimaryClick={() => dispatch(showModal(name))}
        onSecondaryClick={() => dispatch(showCustomModal('customYeast'))}
      />
      <YeastModal />
      <YeastEditModal />
      <YeastCustomModal />
    </Card>
  );
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  recipeStaged: state.recipeEdit.recipeStaged,
});

Yeast.propTypes = {
  dispatch: PropTypes.func.isRequired,
  recipeStaged: PropTypes.object, // eslint-disable-line
};

export default connect(mapStateToProps)(Yeast);
