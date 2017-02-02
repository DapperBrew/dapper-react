import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';


// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';

// actions
import {
  hideModal,
  modalInfo,
} from '../actions/modals';
import { addYeast } from '../actions/recipeStaged';

class YeastModal extends React.Component {
  render() {
    const props = this.props;
    const { modal, dispatch } = this.props;
    const { selectedItem } = modal;
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
          items={items}
          name={name}
          header="Add Yeast"
          headers={modalInfo.YEAST.SEARCH_TABLE_HEADER}
          cells={modalInfo.YEAST.SEARCH_TABLE_CELLS}
          searchKeys={modalInfo.YEAST.SEARCH_KEYS}
        >
          <ModalSubmit
            closeModal={() => dispatch(hideModal())}
            resetModal={() => dispatch(addYeast(selectedItem, true))}
            submitModal={() => dispatch(addYeast(selectedItem))}
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
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  yeasts: state.data.yeasts,
});


export default connect(mapStateToProps)(YeastModal);
