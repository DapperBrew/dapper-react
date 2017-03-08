import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';
import matchSorter from 'match-sorter';

// actions
import { updateHeader } from '../../../../actions/ui';
import { fetchRecipes } from '../../actions/recipes';

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

    if (this.props.flags.recipesLoaded === false) {
      this.props.dispatch(fetchRecipes());
    }
  }

  handleSearchInput = (e) => {
    this.setState({ recipeSearch: e.target.value });
  }

  render() {
    const recipes = Object.keys(this.props.recipes).map(key => this.props.recipes[key]);
    const filteredData = matchSorter(recipes.reverse(), this.state.recipeSearch, { keys: ['name', 'style', 'recipeType'] });

    return (
      <div className="container">
        <div className="recipe-search">
          <input
            className="recipe-search__input"
            type="search"
            placeholder="Filter..."
            onChange={this.handleSearchInput}
            value={this.state.recipeSearch}
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

RecipeList.propTypes = {
  dispatch: React.PropTypes.func,
  recipes: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
};

const mapStateToProps = state => ({
  recipes: state.recipes,
  flags: state.flags,
});

export default connect(mapStateToProps)(RecipeList);
