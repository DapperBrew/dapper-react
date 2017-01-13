import React from 'react';

import Card from '../../../../../components/Card';
import CardInput from '../components/Input';
import CardSelect from '../components/Select';

import styles from '../../../../../data/styles';
import type from '../../../../../data/type';

const RecipeInfo = () => (
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

export default RecipeInfo;
