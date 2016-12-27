import React from 'react';

import Card from '../../../../../components/Card';
import HopRow from './HopRow';

const Hops = () => (
  <Card cardTitle="Hops">
    <table className="recipe-table">
      <thead>
        <tr className="">
          <th className="recipe-table__header text-left">Name</th>
          <th className="recipe-table__header text-right">Weight</th>
          <th className="recipe-table__header text-right">Time</th>
          <th className="recipe-table__header text-right">Stage</th>
          <th className="recipe-table__header text-right">IBU</th>
          <th className="recipe-table__header text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <HopRow />
      </tbody>
    </table>
    <button className="button button--primary mt1">Add Hops</button>
  </Card>
);

export default Hops;
