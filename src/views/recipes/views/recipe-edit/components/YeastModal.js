import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';


// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import YeastModalInput from './YeastModalInput';
import IngredientSearch from './IngredientSearch';

// actions
import {
  hideModal,
  modalInfo,
  updateYeastAttenuation,
  updateYeastMinTemp,
  updateYeastMaxTemp,
} from '../actions/modals';

import { addYeast } from '../actions/recipeStaged';

class YeastModal extends React.Component {
  render() {
    const props = this.props;
    const { modal, dispatch } = this.props;
    const { selectedItem, yeastAttenuation, yeastMinTemp, yeastMaxTemp } = modal;
    const name = modalInfo.YEAST.NAME;
    const items = values(props.yeasts)
      .sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

    // don't mount the modal unless the modal is ready to use
    if (modal.modalOpen === true) {
      return (
        <AddModal
          name={name}
          header="Add Yeast"
        >
          <IngredientSearch
            items={items}
            headers={modalInfo.YEAST.SEARCH_TABLE_HEADER}
            cells={modalInfo.YEAST.SEARCH_TABLE_CELLS}
            searchKeys={modalInfo.YEAST.SEARCH_KEYS}
          />
          <YeastModalInput
            onAttenuationChange={attenuation => dispatch(updateYeastAttenuation(attenuation))}
            attenuationValue={modal.yeastAttenuation}
            onMinTempChange={temp => dispatch(updateYeastMinTemp(temp))}
            minTempValue={modal.yeastMinTemp}
            onMaxTempChange={temp => dispatch(updateYeastMaxTemp(temp))}
            maxTempValue={modal.yeastMaxTemp}
            yeasts={this.props.yeasts}
            selectedItem={modal.selectedItem}
            errorField={modal.modalErrorField}
          />
          <ModalSubmit
            closeModal={() => dispatch(hideModal())}
            resetModal={() => dispatch(addYeast(
              selectedItem,
              yeastAttenuation,
              yeastMinTemp,
              yeastMaxTemp,
              true,
            ))}
            submitModal={() => dispatch(addYeast(
              selectedItem,
              yeastAttenuation,
              yeastMinTemp,
              yeastMaxTemp,
            ))}
          />
        </AddModal>
      );
    }
    return <div />;
  }
}

YeastModal.propTypes = {
  modal: React.PropTypes.object.isRequired, // eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
  yeasts: React.PropTypes.object // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  yeasts: state.data.yeasts,
});


export default connect(mapStateToProps)(YeastModal);
