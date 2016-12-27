import React from 'react';

class Equipment extends React.Component {

  componentWillMount() {
    this.props.updateHeader('Equipment');
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12 card">
          <h3 className="card__title">Equipment</h3>
        </div>
      </div>
    );
  }
}

Equipment.propTypes = {
  updateHeader: React.PropTypes.func.isRequired,
};

export default Equipment;
