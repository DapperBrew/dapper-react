import React from 'react';

class NotFound extends React.Component {

  componentWillMount() {
    this.props.updateHeader('');
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12 card">
          <h3 className="card__title">404 Not Found</h3>
        </div>
      </div>
    );
  }
}

NotFound.propTypes = {
  updateHeader: React.PropTypes.func.isRequired,
};

export default NotFound;
