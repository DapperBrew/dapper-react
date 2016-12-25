import React from 'react';

import Card from './Card';
import CardInput from './CardInput';
import CardSelect from './CardSelect';

const styles = [
    { value: 'pale ale', label: 'Pale Ale' },
    { value: 'saison', label: 'Saison' },
];

const type = [
    { value: 'all grain', label: 'All Grain' },
    { value: 'extract', label: 'Extract' },
];


class RecipeCreate extends React.Component {

  componentWillMount() {
    this.props.updateHeader('Create Recipe');
  }

  render() {
    return (
      <div className="container">
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
            options={styles}
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

RecipeCreate.propTypes = {
  updateHeader: React.PropTypes.func.isRequired,
};

export default RecipeCreate;
