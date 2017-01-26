import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../../../../../components/Card';
import CardInput from '../components/Input';
import CardSelect from '../components/Select';

// Selectors
import { getStylesObject } from '../selectors/recipeEdit';

// Action creators
import { setStyle, setName, setEfficiency, setBoilVolume, setBatchSize, setRecipeType } from '../actions/recipeStaged';

// Temp data
import type from '../../../../../data/type';

class RecipeInfo extends React.Component {
  render() {
    const { stylesDropdown, recipeStaged, dispatch } = this.props;
    return (
      <div className="recipe-info">
        <Card cardTitle="Recipe Info">
          <CardInput
            side="left"
            id="recipe-name"
            label="Recipe Name"
            placeholder="ex: Hop Pun"
            onChange={name => dispatch(setName(name))}
            value={recipeStaged.name}
          />
          <CardInput
            side="right"
            id="efficiency"
            label="Efficiency"
            measurement="%"
            placeholder="ex: 76"
            onChange={eff => dispatch(setEfficiency(eff))}
            value={recipeStaged.efficiency}
          />
          <CardSelect
            side="left"
            label="Recipe Type"
            options={type}
            name="select-type"
            onChange={recipeType => dispatch(setRecipeType(recipeType))}
            value={recipeStaged.recipeType}
          />
          <CardSelect
            side="right"
            label="Recipe Style"
            options={stylesDropdown}
            name="select-style"
            onChange={style => dispatch(setStyle(style))}
            value={recipeStaged.style}
          />
          <CardInput
            side="left"
            id="boil-volume"
            label="Estimated Boil Volume"
            measurement="gal"
            placeholder="ex: 7.5"
            onChange={vol => dispatch(setBoilVolume(vol))}
            value={recipeStaged.boilVolume}
          />
          <CardInput
            side="right"
            id="batch-size"
            label="Batch Size"
            measurement="gal"
            placeholder="ex: 5.5"
            onChange={size => dispatch(setBatchSize(size))}
            value={recipeStaged.batchSize}
          />
        </Card>
      </div>
    );
  }
}

RecipeInfo.propTypes = {
  stylesDropdown: React.PropTypes.array, // eslint-disable-line
  recipeStaged: React.PropTypes.object, // eslint-disable-line
  dispatch: React.PropTypes.func,
};

const mapStateToProps = state => ({
  recipeStaged: state.recipeEdit.recipeStaged,
  styles: state.data.styles,
  stylesDropdown: getStylesObject(state),
});

export default connect(mapStateToProps)(RecipeInfo);
