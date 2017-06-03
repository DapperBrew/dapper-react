import PropTypes from 'prop-types';
import React from 'react';

class Settings extends React.Component {

  componentWillMount() {
    this.props.updateHeader('Settings');
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12 card">
          <h3 className="card__title">Settings</h3>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  updateHeader: PropTypes.func.isRequired,
};

export default Settings;
