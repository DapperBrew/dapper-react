import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';


// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import HopModalInput from './HopModalInput';

// actions
import {
  hideModal,
  modalInfo,
  updateHopWeight,
  updateHopTime,
  updateHopStage,
  updateHopType,
} from '../actions/modals';

import { addHop } from '../actions/recipeStaged';

// selectors
import { getHopList } from '../selectors/modals';

class HopModal extends React.Component {
  render() {
    const props = this.props;
    const { modal, dispatch } = this.props;
    const { selectedItem, hopWeight, hopTime, hopStage, hopType } = modal;
    const name = modalInfo.HOP.NAME;
    const items = values(props.hops);

    // don't mount the modal unless the modal is ready to use
    if (modal.modalOpen === true) {
      return (
        <AddModal
          items={items}
          name={name}
          header="Add Hop"
          headers={modalInfo.HOP.SEARCH_TABLE_HEADER}
          cells={modalInfo.HOP.SEARCH_TABLE_CELLS}
          searchKeys={modalInfo.HOP.SEARCH_KEYS}
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
            isError={modal.modalError}
            errorField={modal.modalErrorField}
          />
          <ModalSubmit
            closeModal={() => dispatch(hideModal())}
            resetModal={() =>
              dispatch(addHop(selectedItem, hopWeight, hopTime, hopStage, hopType, true))}
            submitModal={() =>
              dispatch(addHop(selectedItem, hopWeight, hopTime, hopStage, hopType))}
          />
        </AddModal>
      );
    }
    return <div />;
  }
}

HopModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
  hops: React.PropTypes.array, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  hops: getHopList(state),
});


export default connect(mapStateToProps)(HopModal);
