import React from 'react';

// Components
import Card from '../../../../../components/Card';
import MiscRow from './MiscRow';

const Misc = () => (
  <Card cardTitle="Spices & Misc">
    <table className="recipe-table">
      <thead>
        <tr className="">
          <th className="recipe-table__header text-left">Name</th>
          <th className="recipe-table__header text-right">Weight</th>
          <th className="recipe-table__header text-right">Color</th>
          <th className="recipe-table__header text-right">%</th>
          <th className="recipe-table__header text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <MiscRow />
      </tbody>
    </table>
  </Card>
);

export default Misc;
