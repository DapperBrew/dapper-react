import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../../../../../components/Card';
import Input from '../components/Input';
import InputHalf from '../components/InputHalf';
import CardSelect from '../components/Select';
import InputSelect from '../components/InputSelect';

// Selectors
import { getStylesObject } from '../selectors/recipeEdit';

// Action creators
import * as actions from '../actions/recipeStaged';

// Temp data
import type from '../../../../../data/type';

class RecipeInfo extends React.Component {

  batchVolumeInput = () => (
    <InputHalf
      side="right"
      inside="left"
      id="batch-size"
      label="Batch Size"
      measurement="gal"
      placeholder="ex: 5.5"
      onChange={size => this.props.dispatch(actions.setFinalVolume(size))}
      value={this.props.recipeStaged.finalVolume}
    />
  )

  postBoilInput = () => (
    <InputHalf
      side="right"
      inside="left"
      id="batch-size"
      label="Post-Boil Volume"
      measurement="gal"
      placeholder="ex: 5.5"
      onChange={size => this.props.dispatch(actions.setFinalVolume(size))}
      value={this.props.recipeStaged.finalVolume}
    />
  )

  render() {
    const { stylesDropdown, recipeStaged, dispatch } = this.props;
    const { efficiencyType, equipmentProfile } = this.props.recipeStaged;
    return (
      <div className="recipe-info">
        <Card cardTitle="Recipe Info">
          <Input
            side="left"
            id="recipe-name"
            label="Recipe Name"
            placeholder="ex: Hop Pun"
            onChange={name => dispatch(actions.setName(name))}
            value={recipeStaged.name}
          />
          <CardSelect
            side="right"
            label="Recipe Type"
            options={type}
            name="select-type"
            onChange={recipeType => dispatch(actions.setRecipeType(recipeType))}
            value={recipeStaged.recipeType}
          />
          <CardSelect
            side="left"
            label="Recipe Style"
            options={stylesDropdown}
            name="select-style"
            onChange={style => dispatch(actions.setStyle(style))}
            value={recipeStaged.style}
          />
          <CardSelect
            side="right"
            label="Equipment Profile"
            options={[{ label: 'Default', value: 'default' }]}
            name="select-profile"
            onChange={profile => dispatch(actions.setEquipmentProfile(profile))}
            value={equipmentProfile}
          />
          <InputSelect
            side="left"
            id="efficiency"
            label="Efficiency %"
            measurement="%"
            placeholder="ex: 76"
            options={[{ label: 'Mash', value: 'mash' }, { label: 'Brewhouse', value: 'brewhouse' }]}
            onInputChange={eff => dispatch(actions.setEfficiency(eff))}
            inputValue={recipeStaged.efficiency}
            onSelectChange={eff => dispatch(actions.setEfficiencyType(eff))}
            selectValue={efficiencyType}
          />

          {efficiencyType === 'brewhouse' ? this.batchVolumeInput() : this.postBoilInput()}

          <InputHalf
            side="left"
            inside="right"
            id="boil-time"
            label="Boil Time"
            placeholder="ex: 60"
            measurement="min"
            onChange={time => this.props.dispatch(actions.setBoilTime(time))}
            value={this.props.recipeStaged.boilTime}
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
