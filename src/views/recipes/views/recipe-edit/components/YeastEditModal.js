import React from 'react';
import { connect } from 'react-redux';


// Components
import AddModal from './AddModal';
import ModalEditSubmit from './ModalEditSubmit';
import YeastModalInput from './YeastModalInput';

// actions
import {
  hideModal,
  updateYeastAttenuation,
  updateYeastMinTemp,
  updateYeastMaxTemp,
  updateYeastSupplier,
  updateYeastSupplierId,
  updateYeastName,
  updateIndex,
} from '../actions/modals';

import { editYeast } from '../actions/recipeStaged';

const YeastEditModal = (props) => {
  const { modal, dispatch, recipeYeasts } = props;
  const {
    itemIndex,
    yeastName,
    yeastSupplier,
    yeastSupplierId,
    yeastAttenuation,
    yeastMinTemp,
    yeastMaxTemp,
  } = modal;

  // don't mount the modal unless the modal is ready to use
  if (modal.modalOpen === true) {
    return (
      <AddModal
        name="editYeast"
        header="Add Yeast"
      >
        <YeastModalInput
          onAttenuationChange={attenuation => dispatch(updateYeastAttenuation(attenuation))}
          attenuationValue={modal.yeastAttenuation}
          onMinTempChange={temp => dispatch(updateYeastMinTemp(temp))}
          minTempValue={modal.yeastMinTemp}
          onMaxTempChange={temp => dispatch(updateYeastMaxTemp(temp))}
          maxTempValue={modal.yeastMaxTemp}
          yeasts={props.yeasts}
          selectedItem={modal.selectedItem}
          errorField={modal.modalErrorField}
          onSupplierChange={supplier => dispatch(updateYeastSupplier(supplier))}
          onSupplierIdChange={id => dispatch(updateYeastSupplierId(id))}
          onNameChange={name => dispatch(updateYeastName(name))}
          onIndexChange={index => dispatch(updateIndex(index))}
          recipeYeasts={recipeYeasts}
          isEdit={modal.modalIsEdit}
          modalKey={modal.modalKey}
        />
        <ModalEditSubmit
          closeModal={() => dispatch(hideModal())}
          submitModal={() => dispatch(editYeast(
            itemIndex,
            yeastName,
            yeastAttenuation,
            yeastMinTemp,
            yeastMaxTemp,
            yeastSupplier,
            yeastSupplierId,
          ))}
        />
      </AddModal>
    );
  }
  return <div />;
};


YeastEditModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
  yeasts: React.PropTypes.object, // eslint-disable-line
  recipeYeasts: React.PropTypes.array, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  yeasts: state.data.yeasts,
  recipeYeasts: state.recipeEdit.recipeStaged.yeasts,
});


export default connect(mapStateToProps)(YeastEditModal);
