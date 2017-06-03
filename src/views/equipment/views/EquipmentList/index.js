import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import matchSorter from 'match-sorter';

// actions
import { updateHeader } from '../../../../actions/ui';

const columns = [
  {
    columns: [{
      Header: 'Name',
      accessor: 'name',
    }],
  },
  {
    columns: [{
      Header: 'Batch Size',
      accessor: 'batchSize',
    }],
  },
  {
    columns: [{
      Header: 'Efficiency',
      accessor: 'efficiency',
    }],
  },
  {
    columns: [{
      Header: '',
      className: 'text-right',
      headerClassName: 'text-right',
      maxWidth: 200,
      Cell: equipmentProfile => (
        <div>
          <Link to={`/equipment/${equipmentProfile.original._id}/`}>
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
  }

  handleSearchInput = (e) => {
    this.setState({ equipmentSearch: e.target.value });
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
            autoFocus // eslint-disable-line
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
  dispatch: PropTypes.func.isRequired,
  equipments: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  flags: PropTypes.object, // eslint-disable-line

};

const mapStateToProps = state => ({
  equipments: state.equipments,
  flags: state.flags,
});

export default connect(mapStateToProps)(EquipmentList);
