import React from 'react';

class Calculators extends React.Component {

  componentWillMount() {
    this.props.updateHeader('Calculators');
  }


  render() {
    return (
      <div className="container">
        <div className="col-md-12 card">
          <h3 className="card__title">Calculators</h3>
        </div>
      </div>
    );
  }
}

Calculators.propTypes = {
  updateHeader: React.PropTypes.func.isRequired,
};

export default Calculators;
