import PropTypes from 'prop-types';
import React from 'react';

class Brewlog extends React.Component {

  componentWillMount() {
    this.props.updateHeader('Brew Log');
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12 card">
          <h3 className="card__title">Brewlog</h3>
        </div>
      </div>
    );
  }
}

Brewlog.propTypes = {
  updateHeader: PropTypes.func.isRequired,
};

export default Brewlog;
