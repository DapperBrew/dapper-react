import React from 'react';
import { connect } from 'react-redux';

// Components
import Card from '../../../../../components/Card';
import Input from '../../../../../components/Input';
import CardSelect from '../../../../../components/Select';
import InputSelect from '../../../../../components/InputSelect';

// Selectors
import { getStylesObject, getEquipmentsObject } from '../selectors/recipeEdit';

// Action creators
import * as actions from '../actions/recipeStaged';

// Temp data
import type from '../../../../../data/type';

class RecipeInfo extends React.Component {

  updateBatchVolume = (volume) => {
    const { dispatch, recipeStaged } = this.props;
    dispatch(actions.setBatchVolume(volume));
    dispatch(actions.setPostBoilVolume(Number(volume) + Number(recipeStaged.trubChillerLoss)));
  }

  updatePostBoilVolume = (volume) => {
    const { dispatch, recipeStaged } = this.props;
    dispatch(actions.setPostBoilVolume(volume));
    dispatch(actions.setBatchVolume(Number(volume) - Number(recipeStaged.trubChillerLoss)));
  }

  handleSelectEquipment = (profile) => {
    const { dispatch } = this.props;
    dispatch(actions.setEquipmentProfile(profile));
  }

  batchVolumeInput = () => (
    <Input
      side="right"
      inside="left"
      inputWidth="quarter"
      id="batch-size"
      label="Batch Size"
      measurement="gal"
      placeholder="ex: 5.5"
      onChange={this.updateBatchVolume}
      value={this.props.recipeStaged.batchVolume}
    />
  )

  postBoilInput = () => (
    <Input
      side="right"
      inside="left"
      inputWidth="quarter"
      id="batch-size"
      label="Post-Boil Volume"
      measurement="gal"
      placeholder="ex: 5.5"
      onChange={this.updatePostBoilVolume}
      value={this.props.recipeStaged.postBoilVolume}
    />
  )

  render() {
    const { stylesDropdown, equipmentsDropdown, recipeStaged, dispatch } = this.props;
    const { efficiencyType, equipmentProfile } = this.props.recipeStaged;
    return (
      <div className="recipe-info">
        <Card cardTitle="Recipe Info">
          <Input
            side="left"
            inputWidth="half"
            id="recipe-name"
            label="Recipe Name"
            placeholder="ex: Hop Pun"
            onChange={name => dispatch(actions.setName(name))}
            value={recipeStaged.name}
          />
          <CardSelect
            side="right"
            inputWidth="half"
            label="Recipe Type"
            options={type}
            name="select-type"
            onChange={recipeType => dispatch(actions.setRecipeType(recipeType))}
            value={recipeStaged.recipeType}
          />
          <CardSelect
            side="left"
            inputWidth="half"
            label="Recipe Style"
            options={stylesDropdown}
            name="select-style"
            onChange={style => dispatch(actions.setStyle(style))}
            value={recipeStaged.styleId}
          />
          <CardSelect
            side="right"
            inputWidth="half"
            label="Equipment Profile"
            options={equipmentsDropdown}
            name="select-profile"
            onChange={this.handleSelectEquipment}
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

          <Input
            side="left"
            inside="right"
            inputWidth="quarter"
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
  equipmentsDropdown: React.PropTypes.array, // eslint-disable-line
  recipeStaged: React.PropTypes.object, // eslint-disable-line
  dispatch: React.PropTypes.func,
};

const mapStateToProps = state => ({
  recipeStaged: state.recipeEdit.recipeStaged,
  styles: state.data.styles,
  stylesDropdown: getStylesObject(state),
  equipmentsDropdown: getEquipmentsObject(state),
  equipments: state.equipments,
});

export default connect(mapStateToProps)(RecipeInfo);
