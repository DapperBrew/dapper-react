import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';


// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import InputSelect from './InputSelect';

// actions
import { hideModal, modalInfo, updateWeight, updateFermentableUnit } from '../actions/modals';
import { addFermentable } from '../actions/recipeStaged';

// selectors
import { getFermentableList } from '../selectors/modals';

class FermentableModal extends React.Component {

  render() {
    const props = this.props;
    const { modal, dispatch } = this.props;
    const { selectedItem, itemWeight, fermentableUnit } = modal;
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
          <InputSelect
            side="left"
            label="Input Weight"
            id="weight"
            placeholder="ex: 2"
            isError={modal.modalErrorField === 'weight'}
            options={[{ label: 'lb', value: 'lb' }, { label: 'oz', value: 'oz' }]}
            onInputChange={weight => dispatch(updateWeight(weight))}
            onSelectChange={unit => dispatch(updateFermentableUnit(unit))}
            inputValue={modal.itemWeight}
            selectValue={modal.fermentableUnit}
          />
          <ModalSubmit
            closeModal={() => dispatch(hideModal())}
            resetModal={
              () => dispatch(addFermentable(selectedItem, itemWeight, fermentableUnit, true))
            }
            submitModal={() => dispatch(addFermentable(selectedItem, itemWeight, fermentableUnit))}
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
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  fermentables: getFermentableList(state),
});


export default connect(mapStateToProps)(FermentableModal);
