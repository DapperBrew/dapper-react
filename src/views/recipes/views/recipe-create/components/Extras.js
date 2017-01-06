import React from 'react';

import Card from '../../../../../components/Card';
import ExtrasRow from './ExtrasRow';
import ExtrasModal from './ExtrasModal';
import AddModal from './AddModal';
import AddButton from './AddButton';

class Extras extends React.Component {
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
        <Card cardTitle="Spices & Extras">
          <table className="recipe-table">
            <thead>
              <tr className="">
                <th className="recipe-table__header text-left">Name</th>
                <th className="recipe-table__header text-right">Amount</th>
                <th className="recipe-table__header text-right">Time</th>
                <th className="recipe-table__header text-right">Stage</th>
                <th className="recipe-table__header text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <ExtrasRow />
            </tbody>
          </table>
          <AddButton text="Add Extra" openModal={this.openModal} />
          <AddModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}>
            <ExtrasModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
          </AddModal>
        </Card>
      </div>
    );
  }
}

export default Extras;
