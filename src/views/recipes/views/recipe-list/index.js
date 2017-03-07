import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import matchSorter from 'match-sorter';

import data from '../../../../data/recipes.json';

// actions
import { updateHeader } from '../../../../actions/ui';

const columns = [
  {
    columns: [{
      header: 'Name',
      accessor: 'name',
    }],
  },
  {
    columns: [{
      header: 'Style',
      accessor: 'style',
    }],
  },
  {
    columns: [{
      header: 'Recipe Type',
      accessor: 'recipeType',
      maxWidth: 200,
    }],
  },
  {
    columns: [{
      header: '',
      className: 'text-right',
      headerClassName: 'text-right',
      maxWidth: 200,
      render: recipe => (
        <div>
          <button className="button button--table button--primary button--small">Brew</button>
          <Link to={`/recipes/${recipe.row.id}`}>
            <button className="button button--table button--secondary ml1 button--small">Edit</button>
          </Link>
        </div>
      ),
    }],
  },
];

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeSearch: '',
    };
  }

  componentWillMount() {
    this.props.dispatch(updateHeader('Recipes'));
  }

  handleSearchInput = (e) => {
    this.setState({ recipeSearch: e.target.value });
  }

  render() {
    const filteredData = matchSorter(data, this.state.recipeSearch, { keys: ['name', 'style', 'recipeType'] });
    return (
      <div className="container">
        <div className="recipe-search">
          <input
            className="recipe-search__input"
            type="search"
            placeholder="Filter..."
            onChange={this.handleSearchInput}
            value={this.state.recipeSearch}
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

RecipeList.propTypes = {
  dispatch: React.PropTypes.func,
};

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps)(RecipeList);
