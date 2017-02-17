import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';


// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import MiscModalInput from './MiscModalInput';
import IngredientSearch from './IngredientSearch';


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
    const items = values(props.miscs)
      .sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

    // don't mount the modal unless the modal is ready to use
    if (modal.modalOpen === true) {
      return (
        <AddModal
          name={name}
          header="Add Spices & Misc"
        >
          <IngredientSearch
            items={items}
            headers={modalInfo.MISC.SEARCH_TABLE_HEADER}
            cells={modalInfo.MISC.SEARCH_TABLE_CELLS}
            searchKeys={modalInfo.MISC.SEARCH_KEYS}
          />
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
            selectedItem={selectedItem}
            miscs={props.miscs}
            batchVolume={props.batchVolume}
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
  batchVolume: state.recipeEdit.recipeStaged.batchVolume,
});


export default connect(mapStateToProps)(MiscModal);
