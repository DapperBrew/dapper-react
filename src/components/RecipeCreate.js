import React from 'react';

class RecipeCreate extends React.Component {

  componentWillMount() {
    this.props.updateHeader('Create Recipe');
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12 card">
          <h3 className="card__title">Recipe Info</h3>
        </div>
      </div>
    );
  }
}

RecipeCreate.propTypes = {
  updateHeader: React.PropTypes.func.isRequired,
};

export default RecipeCreate;
