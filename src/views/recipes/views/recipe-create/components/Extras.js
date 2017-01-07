import React from 'react';

// Components
import Card from '../../../../../components/Card';
import AddItem from './AddItem';
import ExtrasRow from './ExtrasRow';
import FermentableModalContent from './FermentableModalContent';

// Dummy Data
import items from '../../../../../data/fermentable';

// Inputs for AddItem Component
const COLUMNS_HEADERS = ['Name', 'Type', 'Color'];
const CELL_ITEMS = ['name', 'type', 'srm'];
const KEYS_TO_FILTERS = ['name', 'type'];

class Extras extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemId: '',
      newItemWeight: '',
    };
  }

  onSubmit = () => {
    console.log(this.state.newItemId, this.state.newItemWeight);
    this.setState({
      newItemId: '',
      newItemWeight: '',
    });
  }

  selectItem = (id) => {
    this.setState({ newItemId: id });
  }

  inputWeight = (weight) => {
    this.setState({ newItemWeight: weight });
  }

  render() {
    return (
      <div>
        <Card cardTitle="Spices & Extras">
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
              <ExtrasRow />
            </tbody>
          </table>
          <AddItem
            title="Add Extras"
            items={items}
            headers={COLUMNS_HEADERS}
            cells={CELL_ITEMS}
            keys={KEYS_TO_FILTERS}
            selectItem={this.selectItem}
            onSubmit={this.onSubmit}
          >
            <FermentableModalContent
              onUpdate={this.inputWeight}
            />
          </AddItem>
        </Card>
      </div>
    );
  }
}

export default Extras;
