import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';

// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import FermentableModalInput from './FermentableModalInput';

// actions
import {
  hideModal,
  modalInfo,
  updateFermentableWeight,
  updateFermentableWeightUnit,
  updateFermentableColor,
  updateFermentablePotential,
} from '../actions/modals';

import { addFermentable } from '../actions/recipeStaged';

// selectors
import { getFermentableList } from '../selectors/modals';

class FermentableModal extends React.Component {
  render() {
    const props = this.props;
    const { modal, dispatch } = this.props;
    const {
      selectedItem,
      fermentableWeight,
      fermentableWeightUnit,
      fermentableColor,
      fermentablePotential,
    } = modal;
    const name = modalInfo.FERMENTABLE.NAME;
    const items = values(props.fermentables);

    // don't mount the modal unless the modal is ready to use
    if (modal.modalOpen === true) {
      return (
        <AddModal
          items={items}
          name={name}
          header="Add Fermentable"
          headers={modalInfo.FERMENTABLE.SEARCH_TABLE_HEADER}
          cells={modalInfo.FERMENTABLE.SEARCH_TABLE_CELLS}
          searchKeys={modalInfo.FERMENTABLE.SEARCH_KEYS}
        >
          <FermentableModalInput
            onWeightChange={weight => dispatch(updateFermentableWeight(weight))}
            onWeightUnitChange={unit => dispatch(updateFermentableWeightUnit(unit))}
            weightValue={modal.fermentableWeight}
            weightUnitValue={modal.fermentableWeightUnit}
            onColorChange={color => dispatch(updateFermentableColor(color))}
            colorValue={modal.fermentableColor}
            onPotentialChange={ppg => dispatch(updateFermentablePotential(ppg))}
            potentialValue={modal.fermentablePotential}
            fermentables={this.props.fermentablesRaw}
            selectedItem={modal.selectedItem}
            errorField={modal.modalErrorField}
          />
          <ModalSubmit
            closeModal={() => dispatch(hideModal())}
            resetModal={() => dispatch(addFermentable(
              selectedItem,
              fermentableWeight,
              fermentableWeightUnit,
              fermentableColor,
              fermentablePotential,
              true,
            ))}
            submitModal={() => dispatch(addFermentable(
              selectedItem,
              fermentableWeight,
              fermentableWeightUnit,
              fermentableColor,
              fermentablePotential,
            ))}
          />
        </AddModal>
      );
    }
    return <div />;
  }
}

FermentableModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
  fermentables: React.PropTypes.array, // eslint-disable-line
  fermentablesRaw: React.PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  fermentables: getFermentableList(state),
  fermentablesRaw: state.data.fermentables,
});


export default connect(mapStateToProps)(FermentableModal);
