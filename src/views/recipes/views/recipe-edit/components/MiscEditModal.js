import React from 'react';
import { connect } from 'react-redux';


// Components
import AddModal from './AddModal';
import ModalEditSubmit from './ModalEditSubmit';
import MiscModalInput from './MiscModalInput';


// actions
import {
  hideModal,
  updateMiscAmount,
  updateMiscAmountUnit,
  updateMiscTime,
  updateMiscTimeUnit,
  updateMiscStage,
  updateMiscName,
  updateIndex,
} from '../actions/modals';

import { editMisc } from '../actions/recipeStaged';

class MiscEditModal extends React.Component {
  render() {
    const props = this.props;
    const { modal, dispatch, recipeMiscs } = this.props;
    const {
      itemIndex,
      miscName,
      miscAmount,
      miscAmountUnit,
      miscTime,
      miscTimeUnit,
      miscStage,
    } = modal;

    // don't mount the modal unless the modal is ready to use
    if (modal.modalOpen === true) {
      return (
        <AddModal
          name="editMisc"
          header="Add Spices & Misc"
        >
          <MiscModalInput
            onAmountChange={amount => dispatch(updateMiscAmount(amount))}
            onAmountUnitChange={unit => dispatch(updateMiscAmountUnit(unit))}
            onTimeChange={time => dispatch(updateMiscTime(time))}
            onTimeUnitChange={unit => dispatch(updateMiscTimeUnit(unit))}
            onStageChange={stage => dispatch(updateMiscStage(stage))}
            amountValue={miscAmount}
            amountUnitValue={miscAmountUnit}
            timeValue={miscTime}
            timeUnitValue={miscTimeUnit}
            stageValue={miscStage}
            isError={modal.modalError}
            errorField={modal.modalErrorField}
            miscs={props.miscs}
            batchVolume={props.batchVolume}
            isEdit={modal.modalIsEdit}
            modalKey={modal.modalKey}
            onIndexChange={index => dispatch(updateIndex(index))}
            onNameChange={name => dispatch(updateMiscName(name))}
            recipeMiscs={recipeMiscs}
          />
          <ModalEditSubmit
            closeModal={() => dispatch(hideModal())}
            submitModal={() =>
              dispatch(editMisc(
                itemIndex,
                miscName,
                miscAmount,
                miscAmountUnit,
                miscTime,
                miscTimeUnit,
                miscStage))}
          />
        </AddModal>
      );
    }
    return <div />;
  }
}

MiscEditModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
  miscs: React.PropTypes.object, // eslint-disable-line
  recipeMiscs: React.PropTypes.array, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  miscs: state.data.miscs,
  batchVolume: state.recipeEdit.recipeStaged.batchVolume,
  recipeMiscs: state.recipeEdit.recipeStaged.miscs,
});


export default connect(mapStateToProps)(MiscEditModal);
