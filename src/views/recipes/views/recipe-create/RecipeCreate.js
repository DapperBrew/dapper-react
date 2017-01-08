import React from 'react';

import RecipeInfo from './components/RecipeInfo';
import Fermentables from './components/Fermentables';
import Hops from './components/Hops';
import Misc from './components/Misc';
import Yeast from './components/Yeast';

// DELETE LATER
import Card from '../../../../components/Card';

class RecipeCreate extends React.Component {

  componentWillMount() {
    this.props.updateHeader('Create Recipe');
  }

  render() {
    return (
      <div className="container">
        <RecipeInfo />
        <div className="input-column">
          <Fermentables />
          <Hops />
          <Misc />
          <Yeast />
        </div>
        <div className="info-column">
          <Card cardTitle="Stats" />
          <Card cardTitle="Style Guide" />
        </div>
      </div>
    );
  }
}

RecipeCreate.propTypes = {
  updateHeader: React.PropTypes.func.isRequired,
};

export default RecipeCreate;
