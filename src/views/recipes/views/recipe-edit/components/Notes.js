import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';

import RichTextEditor from 'react-rte';

// Components
import Card from '../../../../../components/Card';

// actions
import { setRecipeNotes } from '../actions/recipeStaged';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue(),
    };
  }

  onChange = (value) => {
    this.setState({ value });
    this.debounceSetRecipeNotes(value);
  };

  debounceSetRecipeNotes = debounce((value) => {
    const { dispatch } = this.props;
    dispatch(setRecipeNotes(value.toString('html')));
  }, 1000);

  render() {
    const toolbarConfig = {
      // Optionally specify the groups to display (displayed in the order listed).
      display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'HISTORY_BUTTONS'],
      INLINE_STYLE_BUTTONS: [
        { label: 'Bold', style: 'BOLD' },
        { label: 'Italic', style: 'ITALIC' },
        { label: 'Underline', style: 'UNDERLINE' },
      ],
      BLOCK_TYPE_BUTTONS: [
        { label: 'UL', style: 'unordered-list-item' },
        { label: 'OL', style: 'ordered-list-item' },
      ],
    };
    return (
      <Card cardHeader={true} cardTitle="Notes">
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
          toolbarConfig={toolbarConfig}
          className="recipe-note"
          placeholder="Write a note..."
        />
      </Card>
    );
  }
}


Notes.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  notes: state.recipeEdit.recipeNotes,
});

export default connect(mapStateToProps)(Notes);
