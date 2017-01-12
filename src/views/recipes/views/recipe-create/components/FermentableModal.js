import React from 'react';
import { connect } from 'react-redux';

// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import Input from './Input';

// actions
import { hideModal, addFermentable, modalInfo, updateWeight } from '../actions';

// Dummy Data
import items from '../../../../../data/fermentable';

const FermentableModal = (props) => {
  const { modal, dispatch } = props;
  const { selectedItem, itemWeight } = modal;
  const name = modalInfo.FERMENTABLE.NAME;
  return (
    <AddModal
      items={items}
      name={name}
      header="Add Fermentable"
    >
      <span className="ingredient-section-title">Amount</span>
      <Input
        side="left"
        id="weight"
        measurement="lb"
        placeholder="ex: 2"
        onUpdate={weight => dispatch(updateWeight(weight))}
      />
      <ModalSubmit
        closeModal={() => dispatch(hideModal())}
        submitModal={() => dispatch(addFermentable(selectedItem, itemWeight))}
      />
    </AddModal>
  );
};

FermentableModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeCreate.modals,
});


export default connect(mapStateToProps)(FermentableModal);
