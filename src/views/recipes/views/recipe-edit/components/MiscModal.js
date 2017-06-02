import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';

// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import MiscModalInput from './MiscModalInput';
import IngredientSearch from './IngredientSearch';

// actions
import { hideModal, modalInfo } from '../actions/modals';
import { addMisc } from '../actions/recipeStaged';

const MiscModal = (props) => {
  const { modal, dispatch } = props;
  const name = modalInfo.MISC.NAME;
  const items = values(props.miscs)
    .sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

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
      <MiscModalInput />
      <ModalSubmit
        closeModal={() => dispatch(hideModal())}
        resetModal={() =>
          dispatch(addMisc(
            modal.selectedItem,
            modal.miscAmount,
            modal.miscAmountUnit,
            modal.miscTime,
            modal.miscTimeUnit,
            modal.miscStage,
            true,
          ))}
        submitModal={() =>
          dispatch(addMisc(
            modal.selectedItem,
            modal.miscAmount,
            modal.miscAmountUnit,
            modal.miscTime,
            modal.miscTimeUnit,
            modal.miscStage))}
      />
    </AddModal>
  );
};


MiscModal.propTypes = {
  modal: PropTypes.object.isRequired, // eslint-disable-line
  miscs: PropTypes.object, // eslint-disable-line
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  miscs: state.data.miscs,
});

export default connect(mapStateToProps)(MiscModal);
