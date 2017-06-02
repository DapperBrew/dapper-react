import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import AddModal from './AddModal';
import ModalEditSubmit from './ModalEditSubmit';
import YeastModalInput from './YeastModalInput';

// actions
import { hideModal } from '../actions/modals';
import { editYeast } from '../actions/recipeStaged';

const YeastEditModal = (props) => {
  const { modal, dispatch } = props;

  return (
    <AddModal
      name="editYeast"
      header="Add Yeast"
    >
      <YeastModalInput />
      <ModalEditSubmit
        closeModal={() => dispatch(hideModal())}
        submitModal={() => dispatch(editYeast(
          modal.itemIndex,
          modal.yeastName,
          modal.yeastAttenuation,
          modal.yeastMinTemp,
          modal.yeastMaxTemp,
          modal.yeastSupplier,
          modal.yeastSupplierId,
        ))}
      />
    </AddModal>
  );
};


YeastEditModal.propTypes = {
  modal: PropTypes.object.isRequired, // eslint-disable-line
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});


export default connect(mapStateToProps)(YeastEditModal);
