import React from 'react';
import { connect } from 'react-redux';

// Components
import RecipeInfo from './components/RecipeInfo';
import Fermentables from './components/Fermentables';
import Hops from './components/Hops';
import Misc from './components/Misc';
import Yeast from './components/Yeast';
import Stats from './components/Stats';
import StyleGuide from './components/StyleGuide';
import Notes from './components/Notes';
import Mash from './components/Mash';

// actions
import { updateHeader } from '../../../../actions/ui';

class RecipeEdit extends React.Component {
  componentWillMount() {
    this.props.dispatch(updateHeader('Create Recipe'));
  }

  render() {
    return (
      <div className="container">
        <RecipeInfo />
        <div className="input-column">
          <Fermentables />
          <Hops />
          <Yeast />
          <Misc />
          <Mash />
        </div>
        <div className="info-column">
          <Stats />
          <StyleGuide />
          <Notes />
        </div>
      </div>
    );
  }
}

RecipeEdit.propTypes = {
  dispatch: React.PropTypes.func,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
});

export default connect(mapStateToProps)(RecipeEdit);
