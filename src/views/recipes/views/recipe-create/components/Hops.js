import React from 'react';

// Components
import Card from '../../../../../components/Card';
import HopRow from './HopRow';


const Hops = () => (
  <div>
    <Card cardTitle="Hops">
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
          <HopRow />
        </tbody>
      </table>
    </Card>
  </div>
);

export default Hops;
