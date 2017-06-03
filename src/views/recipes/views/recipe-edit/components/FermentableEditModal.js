import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import AddModal from './AddModal';
import ModalEditSubmit from './ModalEditSubmit';
import FermentableModalInput from './FermentableModalInput';

// actions
import { hideModal } from '../actions/modals';
import { editFermentable } from '../actions/recipeStaged';

const FermentableEditModal = (props) => {
  const { modal, dispatch } = props;

  return (
    <AddModal
      name={'editFermentable'}
      header="Edit Fermentable"
    >
      <FermentableModalInput />
      <ModalEditSubmit
        closeModal={() => dispatch(hideModal())}
        submitModal={() => dispatch(editFermentable(
          modal.itemIndex,
          modal.fermentableName,
          modal.fermentableWeight,
          modal.fermentableWeightUnit,
          modal.fermentableColor,
          modal.fermentablePotential,
          modal.fermentableMaltster.value,
          modal.fermentableType,
          modal.fermentableInMash,
          modal.fermentableAfterBoil,
        ))}
      />
    </AddModal>
  );
};

FermentableEditModal.propTypes = {
  modal: PropTypes.object.isRequired, // eslint-disable-line
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});

export default connect(mapStateToProps)(FermentableEditModal);
