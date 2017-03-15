import React from 'react';

// components
import Basic from '../../components/Basic';
import Mash from '../../components/Mash';
import Boil from '../../components/Boil';
import Fermentation from '../../components/Fermentation';
import Advanced from '../../components/Advanced';

class RecipeEdit extends React.Component {

  render() {
    return (
      <div className="container">
        <Basic />
        <Mash />
        <Boil />
        <Fermentation />
        <Advanced />
      </div>
    );
  }

}

export default RecipeEdit;
