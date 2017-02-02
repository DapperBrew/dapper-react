import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';


// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import MiscModalInput from './MiscModalInput';

// actions
import {
  hideModal,
  modalInfo,
  updateMiscAmount,
  updateMiscAmountUnit,
  updateMiscTime,
  updateMiscTimeUnit,
  updateMiscStage,
} from '../actions/modals';

import { addMisc } from '../actions/recipeStaged';

class MiscModal extends React.Component {
  render() {
    const props = this.props;
    const { modal, dispatch } = this.props;
    const { selectedItem, miscAmount, miscAmountUnit, miscTime, miscTimeUnit, miscStage } = modal;
    const name = modalInfo.MISC.NAME;
    const items = values(props.miscs);

    // don't mount the modal unless the modal is ready to use
    if (modal.modalOpen === true) {
      return (
        <AddModal
          items={items}
          name={name}
          header="Add Spices & Misc"
          headers={modalInfo.MISC.SEARCH_TABLE_HEADER}
          cells={modalInfo.MISC.SEARCH_TABLE_CELLS}
          searchKeys={modalInfo.MISC.SEARCH_KEYS}
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
          />
          <ModalSubmit
            closeModal={() => dispatch(hideModal())}
            resetModal={() =>
              dispatch(addMisc(
                selectedItem,
                miscAmount,
                miscAmountUnit,
                miscTime,
                miscTimeUnit,
                miscStage,
                true,
              ))}
            submitModal={() =>
              dispatch(addMisc(
                selectedItem,
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

MiscModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
  miscs: React.PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  miscs: state.data.miscs,
});


export default connect(mapStateToProps)(MiscModal);
