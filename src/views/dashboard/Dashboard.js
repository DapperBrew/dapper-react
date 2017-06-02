import PropTypes from 'prop-types';
import React from 'react';

class Dashboard extends React.Component {

  componentWillMount() {
    this.props.updateHeader('Dashboard');
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12 card">
          <h3 className="card__title">Dashboard</h3>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  updateHeader: PropTypes.func.isRequired,
};

export default Dashboard;
