import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';

// Components
import AddModal from './AddModal';
import ModalEditSubmit from './ModalEditSubmit';
import FermentableModalInput from './FermentableModalInput';

// actions
import { hideModal } from '../actions/modals';
import { editFermentable } from '../actions/recipeStaged';

// selectors
import { getFermentableList } from '../selectors/modals';

const FermentableEditModal = (props) => {
  const { modal, dispatch } = props;
  const items = values(props.fermentables);

  return (
    <AddModal
      items={items}
      name={'customFermentable'}
      header="Edit Fermentable"
    >
      <FermentableModalInput />
      <ModalEditSubmit
        closeModal={() => dispatch(hideModal())}
        submitModal={() => dispatch(editFermentable(
          modal.itemIndex,
          modal.fermentableName,
          modal.fermentableWeight,
          modal.fermentableWeightUnit,
          modal.fermentableColor,
          modal.fermentablePotential,
          modal.fermentableMaltster.value,
          modal.fermentableType,
          modal.fermentableInMash,
          modal.fermentableAfterBoil,
        ))}
      />
    </AddModal>
  );
};

FermentableEditModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  fermentables: React.PropTypes.array, // eslint-disable-line
  dispatch: React.PropTypes.func,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  fermentables: getFermentableList(state),
});

export default connect(mapStateToProps)(FermentableEditModal);
