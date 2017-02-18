import React from 'react';
import { connect } from 'react-redux';


// Components
import AddModal from './AddModal';
import ModalEditSubmit from './ModalEditSubmit';
import HopModalInput from './HopModalInput';

// actions
import {
  hideModal,
  updateHopWeight,
  updateHopTime,
  updateHopStage,
  updateHopType,
  updateHopAlpha,
  updateHopName,
  updateIndex,
} from '../actions/modals';

import { editHop } from '../actions/recipeStaged';

// selectors
import { getHopList } from '../selectors/modals';

const HopEditModal = (props) => {
  const { modal, dispatch, hopsRaw, recipeHops } = props;
  const { itemIndex, hopName, hopWeight, hopTime, hopStage, hopType, hopAlpha } = modal;

  // don't mount the modal unless the modal is ready to use
  if (modal.modalOpen === true) {
    return (
      <AddModal
        name="editHop"
        header="Add Hop"
      >
        <HopModalInput
          onWeightChange={weight => dispatch(updateHopWeight(weight))}
          onTimeChange={time => dispatch(updateHopTime(time))}
          onStageChange={stage => dispatch(updateHopStage(stage))}
          onTypeChange={theHopType => dispatch(updateHopType(theHopType))}
          weightValue={hopWeight}
          timeValue={hopTime}
          stageValue={hopStage}
          typeValue={hopType}
          onAlphaChange={alpha => dispatch(updateHopAlpha(alpha))}
          onNameChange={hName => dispatch(updateHopName(hName))}
          onIndexChange={index => dispatch(updateIndex(index))}
          alphaValue={hopAlpha}
          isError={modal.modalError}
          errorField={modal.modalErrorField}
          hops={hopsRaw}
          recipeHops={recipeHops}
          selectedItem={modal.selectedItem}
          isEdit={modal.modalIsEdit}
          modalKey={modal.modalKey}
        />
        <ModalEditSubmit
          closeModal={() => dispatch(hideModal())}
          submitModal={() =>
            dispatch(editHop(
              itemIndex,
              hopName,
              hopWeight,
              hopTime,
              hopStage,
              hopType,
              hopAlpha,
          ))}
        />
      </AddModal>
    );
  }
  return <div />;
};


HopEditModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
  hops: React.PropTypes.array, // eslint-disable-line
  hopsRaw: React.PropTypes.object, // eslint-disable-line
  recipeHops: React.PropTypes.array, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  hops: getHopList(state),
  hopsRaw: state.data.hops,
  recipeHops: state.recipeEdit.recipeStaged.hops,
});


export default connect(mapStateToProps)(HopEditModal);
