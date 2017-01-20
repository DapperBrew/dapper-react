import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';


// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import InputSelect from './InputSelect';

// actions
import { hideModal, modalInfo, updateWeight, updateHopUnit } from '../actions/modals';
import { addHop } from '../actions/recipeStaged';

class HopModal extends React.Component {

  render() {
    const props = this.props;
    const { modal, dispatch } = this.props;
    const { selectedItem, itemWeight, hopUnit } = modal;
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
          <InputSelect
            side="left"
            label="Input Weight"
            id="weight"
            placeholder="ex: 2"
            isError={modal.modalErrorField === 'weight'}
            options={[{ label: 'lb', value: 'lb' }, { label: 'oz', value: 'oz' }]}
            onInputChange={weight => dispatch(updateWeight(weight))}
            onSelectChange={unit => dispatch(updateHopUnit(unit))}
            inputValue={modal.itemWeight}
            selectValue={modal.fermentableUnit}
          />
          <ModalSubmit
            closeModal={() => dispatch(hideModal())}
            resetModal={() => dispatch(addHop(selectedItem, itemWeight, hopUnit, true))}
            submitModal={() => dispatch(addHop(selectedItem, itemWeight, hopUnit))}
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
  hops: React.PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  hops: state.data.hops,
});


export default connect(mapStateToProps)(HopModal);
