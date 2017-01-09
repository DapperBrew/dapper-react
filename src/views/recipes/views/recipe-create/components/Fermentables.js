import React from 'react';
import { connect } from 'react-redux';

// actions
import { showModal, modalInfo } from '../actions';

// Components
import Card from '../../../../../components/Card';
import FermentableRow from './FermentableRow';
import FermentableModal from './FermentableModal';


// Dummy Data
import items from '../../../../../data/fermentable';

class Fermentables extends React.Component {
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
    const { dispatch } = this.props;
    const name = modalInfo.FERMENTABLE.NAME;
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

          <FermentableModal items={items} name={name} />
          <button onClick={() => dispatch(showModal(name))}>
            Test Button
          </button>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.recipeCreate.modals,
});

Fermentables.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Fermentables);
