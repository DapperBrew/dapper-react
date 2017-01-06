import React from 'react';

import Card from '../../../../../components/Card';
import FermentableRow from './FermentableRow';
import FermentableModal from './FermentableModal';
import AddModal from './AddModal';
import AddButton from './AddButton';

class Fermentables extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };
  }

  closeModal= () => {
    this.setState({ modalIsOpen: false });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  render() {
    return (
      <div>
        <Card cardTitle="Fermentables">
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
              <FermentableRow />
            </tbody>
          </table>
          <AddButton text="Add Fermentable" openModal={this.openModal} />
          <AddModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}>
            <FermentableModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
          </AddModal>
        </Card>
      </div>
    );
  }
}

export default Fermentables;