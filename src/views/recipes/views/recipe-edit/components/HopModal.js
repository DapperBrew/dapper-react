import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';

// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import HopModalInput from './HopModalInput';
import IngredientSearch from './IngredientSearch';

// actions
import { hideModal, modalInfo } from '../actions/modals';

import { addHop } from '../actions/recipeStaged';

// selectors
import { getHopList } from '../selectors/modals';


const HopModal = (props) => {
  const { modal, dispatch } = props;
  const { selectedItem, hopWeight, hopTime, hopStage, hopType, hopAlpha } = modal;
  const name = modalInfo.HOP.NAME;
  const items = values(props.hops);

  return (
    <AddModal
      name={name}
      header="Add Hop"
    >
      <IngredientSearch
        items={items}
        headers={modalInfo.HOP.SEARCH_TABLE_HEADER}
        cells={modalInfo.HOP.SEARCH_TABLE_CELLS}
        searchKeys={modalInfo.HOP.SEARCH_KEYS}
      />
      <HopModalInput />
      <ModalSubmit
        closeModal={() => dispatch(hideModal())}
        resetModal={() =>
          dispatch(addHop(selectedItem, hopWeight, hopTime, hopStage, hopType, hopAlpha, true))}
        submitModal={() =>
          dispatch(addHop(selectedItem, hopWeight, hopTime, hopStage, hopType, hopAlpha))}
      />
    </AddModal>
  );
};

HopModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  hops: React.PropTypes.array, // eslint-disable-line
  dispatch: React.PropTypes.func,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  hops: getHopList(state),
});

export default connect(mapStateToProps)(HopModal);
