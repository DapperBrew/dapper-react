import React from 'react';
import { connect } from 'react-redux';


// Components
import AddModal from './AddModal';
import ModalEditSubmit from './ModalEditSubmit';
import HopModalInput from './HopModalInput';

// actions
import { hideModal } from '../actions/modals';
import { editHop } from '../actions/recipeStaged';


const HopEditModal = (props) => {
  const { modal, dispatch } = props;

  return (
    <AddModal
      name="editHop"
      header="Add Hop"
    >
      <HopModalInput />
      <ModalEditSubmit
        closeModal={() => dispatch(hideModal())}
        submitModal={() =>
          dispatch(editHop(
            modal.itemIndex,
            modal.hopName,
            modal.hopWeight,
            modal.hopTime,
            modal.hopStage,
            modal.hopType,
            modal.hopAlpha,
        ))}
      />
    </AddModal>
  );
};


HopEditModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});


export default connect(mapStateToProps)(HopEditModal);
