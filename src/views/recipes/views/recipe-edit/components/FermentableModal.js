import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';


// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import Input from './Input';

// actions
import { hideModal, modalInfo, updateWeight } from '../actions/modals';
import { addFermentable } from '../actions/recipeStaged';

const FermentableModal = (props) => {
  const { modal, dispatch } = props;
  const { selectedItem, itemWeight } = modal;
  const name = modalInfo.FERMENTABLE.NAME;
  const items = values(props.fermentables);

  // don't mount the modal unless the modal is ready to use
  if (modal.modalOpen === true) {
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
  }
  return <div />;
};

FermentableModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
  fermentables: React.PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  fermentables: state.ingredients.fermentables,
});


export default connect(mapStateToProps)(FermentableModal);
