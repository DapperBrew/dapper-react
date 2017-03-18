import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import matchSorter from 'match-sorter';

// actions
import { updateHeader } from '../../../../actions/ui';
import { fetchEquipmentList } from '../../actions/equipment';

const columns = [
  {
    columns: [{
      header: 'Name',
      accessor: 'name',
    }],
  },
  {
    columns: [{
      header: 'Batch Size',
      accessor: 'batchSize',
    }],
  },
  {
    columns: [{
      header: 'Efficiency',
      accessor: 'efficiency',
    }],
  },
  {
    columns: [{
      header: '',
      className: 'text-right',
      headerClassName: 'text-right',
      maxWidth: 200,
      render: equipmentProfile => (
        <div>
          <Link to={`/equipment/${equipmentProfile.row._id}/`}>
            <button className="button button--table button--secondary ml1 button--small">Edit</button>
          </Link>
        </div>
      ),
    }],
  },
];

class EquipmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentSearch: '',
    };
  }

  componentWillMount() {
    this.props.dispatch(updateHeader('Equipment'));

    if (this.props.flags.equipmentsLoaded === false) {
      this.props.dispatch(fetchEquipmentList());
    }
  }

  handleSearchInput = (e) => {
    this.setState({ recipeSearch: e.target.value });
  }

  render() {
    const equipments = Object.keys(this.props.equipments).map(key => this.props.equipments[key]);
    const filteredData = matchSorter(equipments.reverse(), this.state.equipmentSearch, { keys: ['name', 'style', 'recipeType'] });

    return (
      <div className="container">
        <Link to="/equipment/add-new">
          <button className="button button--primary mb1">Add Equipment Profile</button>
        </Link>
        <div className="search-bar">
          <input
            className="search-bar__input"
            type="search"
            placeholder="Filter..."
            onChange={this.handleSearchInput}
            value={this.state.equipmentSearch}
            autoFocus
          />
        </div>
        <ReactTable
          data={filteredData}
          columns={columns}
          defaultPageSize={10}
        />
      </div>
    );
  }
}

EquipmentList.propTypes = {
  dispatch: React.PropTypes.func,
  equipments: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  flags: React.PropTypes.object, // eslint-disable-line

};

const mapStateToProps = state => ({
  equipments: state.equipments,
  flags: state.flags,
});

export default connect(mapStateToProps)(EquipmentList);