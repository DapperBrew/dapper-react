import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Components
import AddModal from './AddModal';
import ModalEditSubmit from './ModalEditSubmit';
import MiscModalInput from './MiscModalInput';

// actions
import { hideModal } from '../actions/modals';
import { addCustomMisc } from '../actions/recipeStaged';

const MiscEditModal = (props) => {
  const { modal, dispatch } = props;
  const {
    miscName,
    miscAmount,
    miscAmountUnit,
    miscTime,
    miscTimeUnit,
    miscStage,
  } = modal;

  return (
    <AddModal
      name="customMisc"
      header="Add Custom Spices or Misc"
    >
      <MiscModalInput />
      <ModalEditSubmit
        closeModal={() => dispatch(hideModal())}
        submitModal={() =>
          dispatch(addCustomMisc(
            miscName,
            miscAmount,
            miscAmountUnit,
            miscTime,
            miscTimeUnit,
            miscStage,
          ))}
      />
    </AddModal>
  );
};


MiscEditModal.propTypes = {
  dispatch: PropTypes.func,
  modal: PropTypes.object.isRequired, // eslint-disable-line
  miscs: PropTypes.object, // eslint-disable-line
  recipeMiscs: PropTypes.array, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  miscs: state.data.miscs,
  batchVolume: state.recipeEdit.recipeStaged.batchVolume,
  recipeMiscs: state.recipeEdit.recipeStaged.miscs,
});


export default connect(mapStateToProps)(MiscEditModal);
