/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist';

import store from '../../../../store'

// Components
import RecipeInfo from './components/RecipeInfo';
import Fermentables from './components/Fermentables';
import Hops from './components/Hops';
import Misc from './components/Misc';
import Yeast from './components/Yeast';
import Stats from './components/Stats';
import StyleGuide from './components/StyleGuide';

import { fetchData, fetchStyles } from '../../../../actions/data';


// DELETE LATER
import Card from '../../../../components/Card';

class RecipeEdit extends React.Component {
  componentWillMount(dispatch) {
    this.props.updateHeader('Create Recipe');

    // rehydrate from localstorage before loading from API
    persistStore(store, {}, () => {
      this.props.dispatch(fetchData());
      this.props.dispatch(fetchStyles());
    });
  }


  render() {
    const { data } = this.props;

    if (data.loaded) {
      return (
        <div className="container">
          <RecipeInfo />
          <div className="input-column">
            <Fermentables />
            <Hops />
            <Yeast />
          </div>
          <div className="info-column">
            <Stats />
            <StyleGuide />
          </div>
        </div>
      );
    } else {
      return <div>LOADING</div>
    }
  }
}

RecipeEdit.propTypes = {
  updateHeader: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modal: state.recipeEdit.modals,
  data: state.data,
});

export default connect(mapStateToProps)(RecipeEdit);
