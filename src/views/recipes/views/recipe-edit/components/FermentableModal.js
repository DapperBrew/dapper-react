import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';

// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import FermentableModalInput from './FermentableModalInput';
import IngredientSearch from './IngredientSearch';

// actions
import { hideModal, modalInfo } from '../actions/modals';
import { addFermentable } from '../actions/recipeStaged';

// selectors
import { getFermentableList } from '../selectors/modals';

const FermentableModal = (props) => {
  const { modal, dispatch } = props;
  const name = modalInfo.FERMENTABLE.NAME;
  const items = values(props.fermentables);


  return (
    <AddModal
      items={items}
      name={name}
      header="Add Fermentable"
    >
      <IngredientSearch
        items={items}
        headers={modalInfo.FERMENTABLE.SEARCH_TABLE_HEADER}
        cells={modalInfo.FERMENTABLE.SEARCH_TABLE_CELLS}
        searchKeys={modalInfo.FERMENTABLE.SEARCH_KEYS}
      />
      <FermentableModalInput />
      <ModalSubmit
        closeModal={() => dispatch(hideModal())}
        resetModal={() => dispatch(addFermentable(
          modal.selectedItem,
          modal.fermentableWeight,
          modal.fermentableWeightUnit,
          modal.fermentableColor,
          modal.fermentablePotential,
          modal.fermentableMaltster.value,
          true,
        ))}
        submitModal={() => dispatch(addFermentable(
          modal.selectedItem,
          modal.fermentableWeight,
          modal.fermentableWeightUnit,
          modal.fermentableColor,
          modal.fermentablePotential,
          modal.fermentableMaltster.value,
        ))}
      />
    </AddModal>
  );
};


FermentableModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
  fermentables: React.PropTypes.array, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  fermentables: getFermentableList(state),
});

export default connect(mapStateToProps)(FermentableModal);
