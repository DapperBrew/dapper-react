import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';


// Components
import AddModal from './AddModal';
import ModalSubmit from './ModalSubmit';
import YeastModalInput from './YeastModalInput';
import IngredientSearch from './IngredientSearch';

// actions
import { hideModal, modalInfo } from '../actions/modals';

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
          <YeastModalInput />
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
  modal: PropTypes.object.isRequired, // eslint-disable-line
  dispatch: PropTypes.func.isRequired,
  yeasts: PropTypes.object // eslint-disable-line
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  yeasts: state.data.yeasts,
});


export default connect(mapStateToProps)(YeastModal);
