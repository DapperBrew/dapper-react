import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';


// Components
import AddModal from './AddModal';
import ModalEditSubmit from './ModalEditSubmit';
import HopModalInput from './HopModalInput';

// actions
import { hideModal } from '../actions/modals';
import { addCustomHop } from '../actions/recipeStaged';


const HopEditModal = (props) => {
  const { modal, dispatch } = props;

  return (
    <AddModal
      name="customHop"
      header="Add Custom Hop"
    >
      <HopModalInput />
      <ModalEditSubmit
        closeModal={() => dispatch(hideModal())}
        submitModal={() =>
          dispatch(addCustomHop(
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
  modal: PropTypes.object.isRequired, // eslint-disable-line
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});


export default connect(mapStateToProps)(HopEditModal);
