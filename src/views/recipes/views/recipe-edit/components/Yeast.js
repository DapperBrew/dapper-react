import React from 'react';
import { connect } from 'react-redux';

// actions
import { showModal, modalInfo } from '../actions/modals';


// Components
import Card from '../../../../../components/Card';
import YeastList from './YeastList';
import YeastModal from './YeastModal';
import YeastEditModal from './YeastEditModal';

const Yeast = (props) => {
  const { dispatch } = props;
  const name = modalInfo.YEAST.NAME;
  return (
    <Card cardTitle="Yeast">
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
      <button className="mt1" onClick={() => dispatch(showModal(name))}>
        Add New
      </button>
      <YeastModal />
      <YeastEditModal />
    </Card>
  );
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});

Yeast.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Yeast);
