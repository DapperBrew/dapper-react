import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';

// Components
import AddModal from './AddModal';
import ModalEditSubmit from './ModalEditSubmit';
import FermentableModalInput from './FermentableModalInput';

// actions
import { hideModal } from '../actions/modals';
import { addCustomFermentable } from '../actions/recipeStaged';

// selectors
import { getFermentableList } from '../selectors/modals';

const FermentableEditModal = (props) => {
  const { modal, dispatch } = props;
  const items = values(props.fermentables);

  return (
    <AddModal
      items={items}
      name={'customFermentable'}
      header="Add Custom Fermentable"
    >
      <FermentableModalInput />
      <ModalEditSubmit
        closeModal={() => dispatch(hideModal())}
        submitModal={() => dispatch(addCustomFermentable(
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
  modal: PropTypes.object.isRequired, // eslint-disable-line
  fermentables: PropTypes.array, // eslint-disable-line
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  fermentables: getFermentableList(state),
});

export default connect(mapStateToProps)(FermentableEditModal);
