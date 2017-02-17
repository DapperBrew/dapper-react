import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';

// Components
import AddModal from './AddModal';
import ModalEditSubmit from './ModalEditSubmit';
import FermentableModalInput from './FermentableModalInput';

// actions
import {
  hideModal,
  updateFermentableWeight,
  updateFermentableWeightUnit,
  updateFermentableColor,
  updateFermentablePotential,
  updateFermentableMaltster,
  updateFermentableName,
  updateFermentableType,
  updateFermentableInMash,
  updateFermentableAfterBoil,
  updateIndex,
} from '../actions/modals';

import { editFermentable } from '../actions/recipeStaged';

// selectors
import { getFermentableList } from '../selectors/modals';

const FermentableEditModal = (props) => {
  const { modal, dispatch } = props;
  const {
    itemIndex,
    fermentableName,
    fermentableWeight,
    fermentableWeightUnit,
    fermentableColor,
    fermentablePotential,
    fermentableMaltster,
    fermentableType,
    fermentableInMash,
    fermentableAfterBoil,
  } = modal;
  const items = values(props.fermentables);

  // don't mount the modal unless the modal is ready to use
  if (modal.modalOpen === true) {
    return (
      <AddModal
        items={items}
        name={'editFermentable'}
        header="Edit Fermentable"
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
          onMaltsterChange={maltster => dispatch(updateFermentableMaltster(maltster))}
          onNameChange={name => dispatch(updateFermentableName(name))}
          onIndexChange={index => dispatch(updateIndex(index))}
          onTypeChange={fType => dispatch(updateFermentableType(fType))}
          onInMashChange={inMash => dispatch(updateFermentableInMash(inMash))}
          onAfterBoilChange={afterBoil => dispatch(updateFermentableAfterBoil(afterBoil))}
          maltsterValue={modal.fermentableMaltster}
          fermentables={props.fermentablesRaw}
          recipeFermentables={props.recipeFermentables}
          selectedItem={modal.selectedItem}
          errorField={modal.modalErrorField}
          isEdit={modal.modalIsEdit}
          modalKey={modal.modalKey}
        />
        <ModalEditSubmit
          closeModal={() => dispatch(hideModal())}
          submitModal={() => dispatch(editFermentable(
            itemIndex,
            fermentableName,
            fermentableWeight,
            fermentableWeightUnit,
            fermentableColor,
            fermentablePotential,
            fermentableMaltster,
            fermentableType,
            fermentableInMash,
            fermentableAfterBoil,
          ))}
        />
      </AddModal>
    );
  }
  return <div />;
};

FermentableEditModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  recipeFermentables: React.PropTypes.array, // eslint-disable-line
  fermentables: React.PropTypes.array, // eslint-disable-line
  fermentablesRaw: React.PropTypes.object, // eslint-disable-line
  dispatch: React.PropTypes.func,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  fermentables: getFermentableList(state),
  fermentablesRaw: state.data.fermentables,
  recipeFermentables: state.recipeEdit.recipeStaged.fermentables,
});


export default connect(mapStateToProps)(FermentableEditModal);
