import React from 'react';

import Card from '../../../../../components/Card';
import YeastRow from './YeastRow';
import YeastModal from './YeastModal';
import AddModal from './AddModal';
import AddButton from './AddButton';

class Yeast extends React.Component {
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
        <Card cardTitle="Yeast">
          <table className="recipe-table">
            <thead>
              <tr className="">
                <th className="recipe-table__header text-left">Name</th>
                <th className="recipe-table__header text-right">Fermentation Temp</th>
                <th className="recipe-table__header text-right">Av. Attenuation</th>
                <th className="recipe-table__header text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <YeastRow />
            </tbody>
          </table>
          <AddButton text="Add Yeast" openModal={this.openModal} />
          <AddModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}>
            <YeastModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
          </AddModal>
        </Card>
      </div>
    );
  }
}

export default Yeast;
