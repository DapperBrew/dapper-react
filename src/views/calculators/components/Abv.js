import React from 'react';

import CalcLayout from './CalcLayout';
import Card from '../../../components/Card';

const Abv = () => (
  <CalcLayout name="ABV">
    <div className="col-md-6">
      <Card cardTitle="Input">
        <span>ABV Calculator</span>
      </Card>
    </div>
    <div className="col-md-6">
      <Card cardHeader={true} cardTitle="Results">
        <span>ABV Calculator</span>
      </Card>
    </div>
  </CalcLayout>
);

export default Abv;
