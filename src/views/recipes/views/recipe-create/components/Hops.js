import React from 'react';

import Card from '../../../../../components/Card';
import HopRow from './HopRow';
import HopModal from './HopModal';
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
          <AddButton text="Add Hop" openModal={this.openModal} />
          <AddModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}>
            <HopModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
          </AddModal>
        </Card>
      </div>
    );
  }
}

export default Fermentables;
