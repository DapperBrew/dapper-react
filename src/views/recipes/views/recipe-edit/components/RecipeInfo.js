import React from 'react';
import { connect } from 'react-redux';


import Card from '../../../../../components/Card';
import CardInput from '../components/Input';
import CardSelect from '../components/Select';

import { getStylesObject } from '../selectors/data';

import type from '../../../../../data/type';

class RecipeInfo extends React.Component {
  render() {
    const { stylesDropdown } = this.props;
    return (
      <div className="recipe-info">
        <Card cardTitle="Recipe Info">
          <CardInput
            side="left"
            id="recipe-name"
            label="Recipe Name"
            placeholder="ex: Hop Pun"
          />
          <CardInput
            side="right"
            id="efficiency"
            label="Efficiency"
            measurement="%"
            placeholder="ex: 76"
          />
          <CardSelect
            side="left"
            label="Recipe Type"
            options={type}
            name="select-type"
          />
          <CardSelect
            side="right"
            label="Recipe Style"
            options={stylesDropdown}
            name="select-style"
          />
          <CardInput
            side="left"
            id="boil-time"
            label="Boil Time"
            measurement="min"
            placeholder="ex: 90"
          />
          <CardInput
            side="right"
            id="batch-size"
            label="Batch Size"
            measurement="gal"
            placeholder="ex: 5.5"
          />
        </Card>
      </div>
    );
  }
}

RecipeInfo.propTypes = {
  stylesDropdown: React.PropTypes.array,
};

const mapStateToProps = state => ({
  styles: state.data.styles,
  stylesDropdown: getStylesObject(state),
});

export default connect(mapStateToProps)(RecipeInfo);
