import React from 'react';
import { connect } from 'react-redux';

// actions
import { showModal, modalInfo } from '../actions/modals';

// Components
import Card from '../../../../../components/Card';
import FermentableList from './FermentableList';
import FermentableModal from './FermentableModal';


const Fermentables = (props) => {
  const { dispatch } = props;
  const name = modalInfo.FERMENTABLE.NAME;
  return (
    <div>
      <Card cardTitle="Fermentables">
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

        <button className="mt1" onClick={() => dispatch(showModal(name))}>
          Test Button
        </button>
        <FermentableModal />
      </Card>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});

Fermentables.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Fermentables);
