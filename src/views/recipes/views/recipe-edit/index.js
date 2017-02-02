/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';

// Components
import RecipeInfo from './components/RecipeInfo';
import Fermentables from './components/Fermentables';
import Hops from './components/Hops';
import Yeast from './components/Yeast';
import Misc from './components/Misc';
import Stats from './components/Stats';

import { fetchData, fetchStyles } from '../../../../actions/data';


// DELETE LATER
import Card from '../../../../components/Card';

class RecipeEdit extends React.Component {

  componentWillMount(dispatch) {
    this.props.updateHeader('Create Recipe');
    this.props.dispatch(fetchData());
    this.props.dispatch(fetchStyles());
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
            <Misc />
          </div>
          <div className="info-column">
            <Stats />
            <Card cardTitle="Style Guide" />
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
